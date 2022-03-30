const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(express.static("public"));
app.use(cors({ origin: "*" }));

app.listen(port, () => {
  console.log("Server is listening on port" + port);
});
