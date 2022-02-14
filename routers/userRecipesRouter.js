const router = require('express').Router();
const recipe = require("../database/recipe.js");
// const recipeIngredient = require("../database/recipe-ingredient.js");
const Authentification = require("../authentification/authentification");

router.get('/', Authentification.passeport.authenticate('jwt', {session: false}), recipe.userRecipe);
