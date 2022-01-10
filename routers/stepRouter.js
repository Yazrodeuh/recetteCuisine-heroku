const router = require('express').Router();
const step = require("./database/step.js");
const Authentification = require("../authentification/authentification");


router.get('/', Authentification.passeport.authenticate('jwt', {session: false}), step.selectAll);
router.get('/:id', Authentification.passeport.authenticate('jwt', {session: false}), step.selectOneById);
router.post('/', Authentification.passeport.authenticate('jwt', {session: false}), step.createObj);
router.put('/', Authentification.passeport.authenticate('jwt', {session: false}), step.updateObj);
router.delete('/', Authentification.passeport.authenticate('jwt', {session: false}), step.deleteObj);

module.exports = router;
