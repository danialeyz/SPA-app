const express = require("express");
const path = require("path");

const app = express();

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "build", "main.html"));
});

app.listen(5500, () => {
  console.log("server is running");
});
