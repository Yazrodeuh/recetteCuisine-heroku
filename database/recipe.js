const database = require("./requestDatabase");
const dbName = "recipe";

/**
 *
 * @param req
 * @param res
 */
function selectAll(req, res){
    database.select(dbName, req, res);
}

/**
 *
 * @param req
 * @param res
 */
function selectOne(req, res){
    database.selectOne(req.query.id, dbName, req, res);
}

module.exports = {
    selectAll, selectOne
}





