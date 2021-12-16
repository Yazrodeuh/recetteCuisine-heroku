const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000 // this is very important



app.get('/', function (req, res){
    res.send('Homepage')
})

//RECIPE
const recipe = require("./database/recipe.js");
app.get('/recipes', recipe.selectAll);

//INGREDIENT
const ingredient = require("./database/ingredient.js");
app.get('/ingredients', ingredient.selectAll);


//INGREDIENT
const recipeIngredient = require("./database/recipe-ingredient.js");
app.get('/test/:id', recipeIngredient.selectCompleteRecipe);
app.get("/test", recipeIngredient.selectAll);




app.listen(PORT, function () {
    console.log('Example app listening on port ' + PORT)
})


