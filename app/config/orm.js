var connection = require("../config/connection.js");


// Object Relational Mapper (ORM)

var orm = {
  selectTransactionPage: function(cb_result) {
    var queryString = "SELECT * FROM accounts";
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      console.log(result)
      cb_result(result)   
    });
  }

}

module.exports =orm;
