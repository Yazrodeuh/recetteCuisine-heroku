const database = require("./requestDatabase");

/**
 *
 * @param req
 * @param res
 */
function selectAll(req, res){
    database.selectAll("ingredient", req, res);
}

module.exports = {
    selectAll
}






