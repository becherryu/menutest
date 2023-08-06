const express = require("express");
const bodyPaser = require("body-parser");
const cors = require("cors");

const app = express();

// parse requests of content-type: application/json
app.use(bodyPaser.json());

// parse requests of content-type: application/x-www-from-urlencoded
app.use(bodyPaser.urlencoded({ extended: true }));
app.use(cors());

//simple route
app.get("/", (req, res) => {
  res.json({ test: "success!" });
});

require("./routes/store.js")(app);

//set port, listen for requests
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
