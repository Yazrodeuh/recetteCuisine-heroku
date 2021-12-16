const database = require("./requestDatabase");
const dbName = "recipe";

/**
 *
 * @param req
 * @param res
 */
function selectAll(req, res){
    database.selectAll(dbName, req, res);
}

module.exports = {
    selectAll
}





