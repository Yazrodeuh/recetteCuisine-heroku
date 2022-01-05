const express = require('express')
const app = express()
const cors = require('cors');

app.use(cors());
require("dotenv").config();
const PORT = process.env.PORT || 8000// this is very important



app.get('/', function (req, res){
    res.send('Homepage')
})

app.get('/error',(req,res) => {
    res.status(501);
    res.json({error: true});
})

//RECIPE
const recipe = require("./database/recipe.js");
app.get('/recepies', recipe.selectAll);

//INGREDIENT
const ingredient = require("./database/ingredient.js");
app.get('/ingredients', ingredient.selectAll);


//RECIPE INGREDIENT
const recipeIngredient = require("./database/recipe-ingredient.js");
app.get('/recipe/:name', recipeIngredient.selectCompleteRecipe);
app.get("/test", recipeIngredient.selectAll);




app.listen(PORT, function () {
    console.log('Example app listening on port ' + PORT)
})


