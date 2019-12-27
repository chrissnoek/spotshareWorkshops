const express = require("express");
const { ApolloServer } = require("apollo-server-express");
// Scalartype is user for other types of values than graphql provides
const { GraphQLScalarType } = require("graphql");
// Kind is used in de parseLiteral method for scalartypes
const { Kind } = require("graphql/language");
require("dotenv").config();

const { MongoClient } = require("mongodb");
// fs is to include the schema.grapql file
const fs = require("fs");

const imagesApi = require("./routes/images");

const app = express();

const enableCors = (process.env.ENABLE_CORS || "true") === "true";
console.log("CORS SETTINGS:", enableCors);

let aboutMessage = "This is the about message";
const url = process.env.DB_URL || "mongodb+srv://spotshare:shareaspot01@cluster0-wg2gb.mongodb.net/test";

let db;

const connectToDb = async () => {
  const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  await client.connect();
  console.log("Connected to MongoDB at", url);
  db = client.db();
};

// resolver function for returning the workshopDB array
const workshopList = async () => {
  const workshops = await db
    .collection("workshops")
    .find({})
    .toArray();
  return workshops;
};

function workshopValidate(workshop) {
  const errors = [];
  if (workshop.title.length < 3) {
    errors.push("Field 'title' must be at least 3 characters long.");
  }
  // if (workshop.status === "Assigned" && !workshop.owner) {
  //   errors.push('Field "owner" is required when status is "Assigned"');
  // }
  if (errors.length > 0) {
    throw new UserInputError("Invalid input(s)", { errors });
  }
}

// get the next id available in the database
const getNextSequence = async name => {
  const result = await db
    .collection("counters")
    .findOneAndUpdate(
      { _id: name },
      { $inc: { current: 1 } },
      { returnOriginal: false }
    );
  return result.value.current;
};

const workshopAdd = async (_, { workshop }) => {
  const newWorkshop = { ...workshop };
  workshopValidate(newWorkshop);
  newWorkshop.created = new Date();
  newWorkshop.id = await getNextSequence("workshops");
  const result = await db.collection("workshops").insertOne(newWorkshop);
  const savedWorkshop = await db
    .collection("workshops")
    .findOne({ _id: result.insertedId });
  return savedWorkshop;
};

const setAboutMessage = (_, { message }) => {
  aboutMessage = message;
  return aboutMessage;
};

const GraphQLDate = new GraphQLScalarType({
  name: "GraphQLDate",
  description: "A Date() type in GraphQL as a scalar",
  // gets invoked when we query data
  serialize(value) {
    return value.toISOString();
  },
  // gets invoked to parse client input that was passed through variables
  parseValue(value) {
    const dateValue = new Date(value);
    return Number.isNaN(dateValue.getTime()) ? undefined : dateValue;
  },
  // gets invoked to parse client input that was passed inline in the query
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      const value = new Date(ast.value);
      return Number.isNaN(value.getTime()) ? undefined : value;
    }
    return undefined;
  }
});

const typeDefs = fs.readFileSync("schema.graphql", "utf-8");

const resolvers = {
  Query: {
    about: () => aboutMessage,
    workshopList
  },
  Mutation: {
    setAboutMessage,
    workshopAdd
  },
  GraphQLDate
};

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app, path: "/graphql", cors: enableCors });

app.use("/api/images", imagesApi);

const port = process.env.API_SERVER_PORT || 3000;
(async () => {
  try {
    await connectToDb();
    app.listen(port, () => {
      console.log(`🚀 Api server started on port ${port}`);
    });
  } catch (err) {
    console.log("ERROR FROM SCRIPTS: ", err);
  }
})();
