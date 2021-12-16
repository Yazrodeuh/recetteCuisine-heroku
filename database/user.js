const database = require("./requestDatabase");

/**
 *
 * @param req
 * @param res
 */
function selectAll(req, res){
    database.selectAll("user-list", req, res);
}

module.exports = {
    selectAll
}






