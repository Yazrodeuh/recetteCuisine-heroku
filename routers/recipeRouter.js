const router = require('express').Router();
const recipe = require("../database/recipe.js");
// const recipeIngredient = require("../database/recipe-ingredient.js");
const Authentification = require("../authentification/authentification");

router.get('/', Authentification.passeport.authenticate('jwt', {session: false}), recipe.selectAll);
router.get('/:id', Authentification.passeport.authenticate('jwt', {session: false}), recipe.selectOneById);
router.post('/', Authentification.passeport.authenticate('jwt', {session: false}), recipe.createObj);
router.put('/', Authentification.passeport.authenticate('jwt', {session: false}), recipe.updateObj);
router.delete('/:id', Authentification.passeport.authenticate('jwt', {session: false}), recipe.deleteObj);

module.exports = router;