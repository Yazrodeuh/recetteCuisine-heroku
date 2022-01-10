const router = require('express').Router();
const user = require("./database/user.js");
const Authentification = require("../authentification/authentification");

//router.get('/', Authentification.passeport.authenticate('jwt', {session: false}), user.selectAll);
router.get('/:id', Authentification.passeport.authenticate('jwt', {session: false}), user.selectOneById);
router.post('/', Authentification.passeport.authenticate('jwt', {session: false}), user.createObj);
router.put('/', Authentification.passeport.authenticate('jwt', {session: false}), user.updateObj);
router.delete('/', Authentification.passeport.authenticate('jwt', {session: false}), user.deleteObj);


module.exports = router;