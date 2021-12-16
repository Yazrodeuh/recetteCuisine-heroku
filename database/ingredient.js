const {requestDB} = require("./requestDatabase");


function selectAll(req, res){
    requestDB("ingredient")
        .then(r => res.json(r.data))
        .catch(err => res.json(err));
}


module.exports = {
    selectAll: selectAll
}






