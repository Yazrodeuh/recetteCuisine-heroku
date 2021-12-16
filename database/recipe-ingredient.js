const database = require("./requestDatabase");
const dbName = "recipe-ingredient"
const recipe = require('./recipe.js');
const ingredient = require("./ingredient.js")

/**
 *
 * @param req
 * @param res
 */
function selectAll(req, res){
    database.select(dbName, req, res);
}


function selectCompleteRecipe(req, res){

    database.select(dbName + "?q={\"recipe-ingredient\":{\"recipe.id\":" + req.params.id + "}}", req, res);



}




module.exports = {
    selectAll, selectCompleteRecipe
}






