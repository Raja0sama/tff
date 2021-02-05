var express = require("express");
var app = express();
var path = require("path");
var content = require("./contentfull.json");
var contentm = require("./contentfullm.json");
app.use(express.static(__dirname + ""));

app.get("/contentfullData", function (req, res) {
  const q = Object.keys(req.query)[0];
  res.send(content[q]);
  //   res.sendFile(path.join(__dirname + "/index.html"));
});
app.get("/contentfullDataMobile", function (req, res) {
  const q = Object.keys(req.query)[0];
  res.send(contentm[q]);
  //   res.sendFile(path.join(__dirname + "/index.html"));
});
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(process.env.PORT || 80);
