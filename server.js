const express = require("express");
const config = require("./config/default.json");
const bodyParser = require("body-parser");
const cors = require("cors");
const hmac = require("./hmac");

const app = express();
const port = config.server.port;
const host = config.server.host;

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(cors());

app.post("/", (req, res) => {
  if (!req.body.id) {
    res.send(JSON.stringify({ message: "id parameter missing" }));
  } else {
    const token = hmac.getHMACToken(req.body.id);
    const response = `{\n id=${req.body.id}&Signature=${token} \n}`;
    res.send(response);
  }
});

app.listen(port, host, () => console.log(`Server listening on port ${port}!`));
