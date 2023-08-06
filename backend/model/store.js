const sql = require("./db.js");

const Store = function (store) {
  this.id = store.id;
  this.title = store.title;
  this.defalut_runningtime = store.defalut_runningtime;
  this.other_runningtime = store.other_runningtime;
  this.breaktime = store.breaktime;
  this.day_off = store.day_off;
};

Store.getAll = (result) => {
  sql.query("SELECT * FROM store", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("stores: ", res);
    result(null, res);
  });
};

module.exports = Store;
