const router = require('express').Router();
const ingredient = require("../database/ingredient.js");
const Authentification = require("../authentification/authentification");

router.get('/', Authentification.passeport.authenticate('jwt', {session: false}), ingredient.selectAll);
router.get('/:id', Authentification.passeport.authenticate('jwt', {session: false}), ingredient.selectOneById);
router.post('/', Authentification.passeport.authenticate('jwt', {session: false}), ingredient.createObj);
router.put('/', Authentification.passeport.authenticate('jwt', {session: false}), ingredient.updateObj);
router.delete('/', Authentification.passeport.authenticate('jwt', {session: false}), ingredient.deleteObj);

module.exports = router;