const database = require("./requestDatabase");

/**
 *
 * @param req
 * @param res
 */
function selectAll(req, res){
    database.selectAll("step", req, res);
}

module.exports = {
    selectAll
}






