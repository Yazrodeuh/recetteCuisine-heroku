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
    database.select(dbName + "?q={\"recipe.0\":{\"name\":\"" + req.params.name + "\"}}", req, res);

}




module.exports = {
    selectAll, selectCompleteRecipe
}






