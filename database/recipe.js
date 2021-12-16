const {requestDB} = require("./requestDatabase");


function selecAll(req, res){
    requestDB("recipe")
        .then(r => res.json(r.data))
        .catch(err => res.json(err));
}



module.exports = {
    selecAll: selecAll
}






