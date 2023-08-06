const Store = require("../model/store.js");

// Retrieve all Stores from the database.
exports.findAll = (req, res) => {
  Store.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving stores.",
      });
    else res.send(data);
  });
};
