const database = require("./requestDatabase");
const axios = require("axios");
const dbName = "ingredient"

/**
 *
 * @param req
 * @param res
 */
function selectAll(req, res){
    database.select(dbName, req, res);
}

/**
 *
 * @param req
 * @param res
 */
function selectOne(req, res){
    database.selectOne(req.query.id, dbName, req, res);
}

function create(req,res) {
    axios.post(database.url,req.body,database.headers).then(r => {
        res.send("ingredient created");
    }).catch(err => {
        res.statusCode(500);
        res.json(err)
    })
}


module.exports = {
    selectAll, selectOne
}






