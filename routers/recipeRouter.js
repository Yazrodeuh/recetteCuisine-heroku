const router = require('express').Router();
const recipe = require("../database/recipe.js");
// const recipeIngredient = require("../database/recipe-ingredient.js");
const Authentification = require("../authentification/authentification");



router.get('/', Authentification.passeport.authenticate('jwt', {session: false}), recipe.selectAll);
router.get('/:id', Authentification.passeport.authenticate('jwt', {session: false}), recipe.selectOneById);
router.post('/', Authentification.passeport.authenticate('jwt', {session: false}), recipe.createObj);
router.put('/', Authentification.passeport.authenticate('jwt', {session: false}), recipe.updateObj);
router.delete('/', Authentification.passeport.authenticate('jwt', {session: false}), recipe.deleteObj);

router.get('/myrecepies', Authentification.passeport.authenticate('jwt', {session: false}), recipe.userRecipe);


//router.get('/', Authentification.passeport.authenticate('jwt', {session: false}), recipeIngredient.selectAll);
// router.get('/:id', Authentification.passeport.authenticate('jwt', {session: false}), recipeIngredient.selectOneById);
// router.post('/', Authentification.passeport.authenticate('jwt', {session: false}), recipeIngredient.createObj);
// router.put('/', Authentification.passeport.authenticate('jwt', {session: false}), recipeIngredient.updateObj);
// router.delete('/', Authentification.passeport.authenticate('jwt', {session: false}), recipeIngredient.deleteObj);


module.exports = router;