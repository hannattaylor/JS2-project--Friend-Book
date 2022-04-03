const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(cors({ origin: "*" }));
app.use(express.static("public"));

app.listen(port, () => {
  console.log("Server is listening on port" + port);
});
