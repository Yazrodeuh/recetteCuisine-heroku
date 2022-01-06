const database = require("./requestDatabase");
const axios = require("axios");
const tableName = "ingredient"

/**
 *
 * @param req
 * @param res
 */
function selectAll(req, res) {
    database.selectAll(tableName)
        .then((r) => {
            res.json(r.data);
        })
        .catch((e) => {
            res.statusCode(500)
            res.json(e);
        });
}

/**
 *
 * @param req
 * @param res
 */
function selectOne(req, res) {
    database.selectOneById(tableName, req.query.id)
        .then((r) => {
            res.json(r.data);
        })
        .catch((e) => {
            res.statusCode(500)
            res.json(e);
        });
}

/**
 *
 * @param req
 * @param res
 */
function createObj(req, res) {
    database.createObj(tableName, req.body)
        .then((result) => {
            res.json(result.data);
        })
        .catch((error) => {
            res.statusCode(500)
            res.json(error);
        });
}

/**
 *
 * @param req
 * @param res
 */
function updateObj(req, res) {
    database.updateObj(tableName, req.body)
        .then((result) => {
            res.json(result.data);
        })
        .catch((error) => {
            res.statusCode(500)
            res.json(error);
        });
}

/**
 *
 * @param req
 * @param res
 */
function deleteObj(req, res){
    database.deleteObj(tableName, req.query.id)
        .then((result) => {
            res.json(result.data);
        })
        .catch((error) => {
            res.statusCode(500)
            res.json(error);
        });
}



module.exports = {
    selectAll,
    selectOne,
    createObj,
    updateObj,
    deleteObj
}






