const express = require('express')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
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
app.get('/recipes', recipe.selectAll);
app.get('/recipe/:id', recipe.selectAll);
app.post('/recipe', recipe.createObj);
app.put('/recipe', recipe.updateObj);
app.delete('/recipe', recipe.deleteObj);

//INGREDIENT
const ingredient = require("./database/ingredient.js");
app.get('/ingredients', ingredient.selectAll);
app.get('/ingredient/:id', ingredient.selectAll);
app.post('/ingredient', ingredient.createObj);
app.put('/ingredient', ingredient.updateObj);
app.delete('/ingredient', ingredient.deleteObj);


//RECIPE INGREDIENT
const recipeIngredient = require("./database/recipeIngredient.js");
app.get('/recipeIngredients', recipeIngredient.selectAll);
app.get('/recipeIngredient/:id', recipeIngredient.selectAll);
app.post('/recipeIngredient', recipeIngredient.createObj);
app.put('/recipeIngredient', recipeIngredient.updateObj);
app.delete('/recipeIngredient', recipeIngredient.deleteObj);

//STEP
const step = require("./database/step.js");
app.get('/steps', step.selectAll);
app.get('/step/:id', step.selectAll);
app.post('/step', step.createObj);
app.put('/step', step.updateObj);
app.delete('/step', step.deleteObj);


app.listen(PORT, function () {
    console.log('Example app listening on port ' + PORT)
})


