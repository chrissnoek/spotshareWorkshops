const express = require("express");
require("dotenv").config();
const app = express();

app.use(express.static("public"));

const port = process.env.UI_SERVER_PORT || 8000;
const env = { UI_SERVER_PORT };

app.listen(port, function() {
  console.log(`UI started on port ${port}`);
});

app.get("/env.js", function(req, res) {
  res.send(`window.ENV = ${JSON.stringify(env)}`);
});
