const express = require('express')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');
const Authentification = require('./authentification/authentification.js');

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use(Authentification.passeport.initialize())
require("dotenv").config();
const PORT = process.env.PORT || 8000 // this is very important


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
app.get('/recipe/:id', recipe.selectOneById);
app.post('/recipe', recipe.createObj);
app.put('/recipe', recipe.updateObj);
app.delete('/recipe', recipe.deleteObj);

//INGREDIENT
const ingredient = require("./database/ingredient.js");
app.get('/ingredients', ingredient.selectAll);
app.get('/ingredient/:id', ingredient.selectOneById);
app.post('/ingredient', ingredient.createObj);
app.put('/ingredient', ingredient.updateObj);
app.delete('/ingredient', ingredient.deleteObj);

//RECIPE INGREDIENT
const recipeIngredient = require("./database/recipe-ingredient.js");
app.get('/recipeIngredients', recipeIngredient.selectAll); //TODO une route pour récupérer la liste des recettes
app.get('/recipeIngredient/:id', recipeIngredient.selectOneById); //TODO une route pour récupérer une recette
app.post('/recipeIngredient', recipeIngredient.createObj); //TODO une route pour ajouter une recette
app.put('/recipeIngredient', recipeIngredient.updateObj); //TODO une route pour modifier une recette
app.delete('/recipeIngredient', recipeIngredient.deleteObj); //TODO une route pour supprimer une recette

//STEP
const step = require("./database/step.js");
app.get('/steps', step.selectAll);
app.get('/step/:id', step.selectOneById);
app.post('/step', step.createObj);
app.put('/step', step.updateObj);
app.delete('/step', step.deleteObj);

//TEST authentification
app.post('/login', (req, res) =>{
    //TODO une route pour se connecter (récupérer un JWT)
    const result = Authentification.login(req.body.email, req.body.password);
    res.status(result.status);
    res.json(result.message);
})
app.get('/private', Authentification.passeport.authenticate('jwt', {session: false}), (req, res) => {
    res.send('private. user : ' + req.user.email);
})

app.listen(PORT, function () {
    console.log('Example app listening on port ' + PORT)
})


