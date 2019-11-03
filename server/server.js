const express = require("express");
const webpack = require("webpack");
const { ApolloServer } = require("apollo-server-express");
// fs is to include the schema.grapql file
const fs = require("fs");

const app = express();
const config = require("../webpack.config");
const compiler = webpack(config);

let aboutMessage = "This is the about message";

const workshopsDB = [
  {
    id: 8046,
    memberId: 4790,
    created: new Date("2018-08-15"),
    title: "Long Exposure",
    description: "Leer de fijne kneepjes van Long Exposure fotografie",
    date: new Date("2019-09-24T19:00:26"),
    maxPlaces: 10,
    attendees: 3,
    price: 75,
    place: "Rotterdam",
    image: {
      imageSmall: "",
      imageLarge: "",
      imageThumbnail: ""
    }
  },
  {
    id: 8047,
    memberId: 4790,
    created: new Date("2018-08-15"),
    title: "Fotografie basis",
    description: "Leer de basis van fotografie",
    date: new Date("2019-09-24T19:00:26"),
    maxPlaces: 10,
    attendees: 3,
    price: 75,
    place: "Amsterdam",
    image: {
      imageSmall:
        "https://www.spotshare.nl/site/assets/files/8065/eos_6dm2-482-3-4-2.746x746-pim2-thumbhome746.jpg",
      imageLarge:
        "https://www.spotshare.nl/site/assets/files/8065/eos_6dm2-482-3-4-2.1750x0-pim2-pim2full15700489791750.jpg"
    }
  }
];

// resolver function for returning the workshopDB array
const workshopList = () => workshopsDB;

const setAboutMessage = (_, { message }) => {
  return (aboutMessage = message);
};

const typeDefs = fs.readFileSync("./server/schema.graphql", "utf-8");

const resolvers = {
  Query: {
    about: () => aboutMessage,
    workshopList
  },
  Mutation: {
    setAboutMessage
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

app.use(
  require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  })
);
app.use(require("webpack-hot-middleware")(compiler));

app.use(express.static("public"));

server.applyMiddleware({ app, path: "/graphql" });

app.listen(5000, () => {
  console.log("🚀 App started on port 5000");
});
