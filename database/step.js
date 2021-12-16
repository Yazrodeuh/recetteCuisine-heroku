const database = require("./requestDatabase");
const dbName = "step"

/**
 *
 * @param req
 * @param res
 */
function selectAll(req, res){
    database.select(dbName, req, res);
}

module.exports = {
    selectAll
}






