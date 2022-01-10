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
app.get('/recipes',Authentification.passeport.authenticate('jwt', {session: false}), recipe.selectAll);
app.get('/recipe/:id',Authentification.passeport.authenticate('jwt', {session: false}), recipe.selectOneById);
app.post('/recipe',Authentification.passeport.authenticate('jwt', {session: false}), recipe.createObj);
app.put('/recipe',Authentification.passeport.authenticate('jwt', {session: false}), recipe.updateObj);
app.delete('/recipe',Authentification.passeport.authenticate('jwt', {session: false}), recipe.deleteObj);

//INGREDIENT
const ingredient = require("./database/ingredient.js");
app.get('/ingredients',Authentification.passeport.authenticate('jwt', {session: false}), ingredient.selectAll);
app.get('/ingredient/:id',Authentification.passeport.authenticate('jwt', {session: false}), ingredient.selectOneById);
app.post('/ingredient',Authentification.passeport.authenticate('jwt', {session: false}), ingredient.createObj);
app.put('/ingredient',Authentification.passeport.authenticate('jwt', {session: false}), ingredient.updateObj);
app.delete('/ingredient',Authentification.passeport.authenticate('jwt', {session: false}), ingredient.deleteObj);

//RECIPE INGREDIENT
const recipeIngredient = require("./database/recipe-ingredient.js");
app.get('/recipeIngredients',Authentification.passeport.authenticate('jwt', {session: false}), recipeIngredient.selectAll);
app.get('/recipeIngredient/:id',Authentification.passeport.authenticate('jwt', {session: false}), recipeIngredient.selectOneById);
app.post('/recipeIngredient',Authentification.passeport.authenticate('jwt', {session: false}), recipeIngredient.createObj);
app.put('/recipeIngredient',Authentification.passeport.authenticate('jwt', {session: false}), recipeIngredient.updateObj);
app.delete('/recipeIngredient',Authentification.passeport.authenticate('jwt', {session: false}), recipeIngredient.deleteObj);

//STEP
const step = require("./database/step.js");
app.get('/steps',Authentification.passeport.authenticate('jwt', {session: false}), step.selectAll);
app.get('/step/:id',Authentification.passeport.authenticate('jwt', {session: false}), step.selectOneById);
app.post('/step',Authentification.passeport.authenticate('jwt', {session: false}), step.createObj);
app.put('/step',Authentification.passeport.authenticate('jwt', {session: false}), step.updateObj);
app.delete('/step',Authentification.passeport.authenticate('jwt', {session: false}), step.deleteObj);

//TEST authentification
app.post('/login', (req, res) =>{
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


