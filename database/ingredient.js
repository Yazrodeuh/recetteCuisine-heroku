const database = require("./requestDatabase");
const dbName = "ingredient"

/**
 *
 * @param req
 * @param res
 */
function selectAll(req, res){
    database.selectAll(dbName, req, res);
}

function selectOne(req, res){
    database.selectOne(req.query.id, dbName, req, res);
}


module.exports = {
    selectAll
}






