const database = require("./requestDatabase");
const dbName = "recipe-ingredient"

/**
 *
 * @param req
 * @param res
 */
function selectAll(req, res){
    database.select(dbName, req, res);
}


function selectCompleteRecipe(req, res){

    database.select(dbName + "?q={\"recipe\":{\"id\":" + req.params.id + "}}", req, res);



}




module.exports = {
    selectAll, selectCompleteRecipe
}






