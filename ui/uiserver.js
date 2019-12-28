require("dotenv").config();
const express = require("express");

const app = express();

app.use(express.static("public"));

const UI_API_ENDPOINT = process.env.UI_API_ENDPOINT || "http://localhost:3000/graphql";
const UI_API_IMAGE_ENDPOINT = process.env.UI_API_IMAGE_ENDPOINT || "http://localhost:3000/api/images/upload";
const env = { UI_API_ENDPOINT, UI_API_IMAGE_ENDPOINT };

app.get("/env.js", (req, res) => res.send(`window.ENV = ${JSON.stringify(env)}`));

const port = process.env.UI_SERVER_PORT || 8000;

app.listen(port, () => {
  console.log(`UI started on port ${port}`);
});
