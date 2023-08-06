module.exports = (app) => {
  const store = require("../controller/store.js");

  // Retrieve all Stores
  app.get("/store", store.findAll);
};
