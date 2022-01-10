const database = require("./requestDatabase");
const tableName = "ingredient"

/**
 *
 * @param req
 * @param res
 */
async function selectAll(req, res) {
    try{
        res.send(await database.selectAll('noejzec,zk'));

    }catch (error){
        res.status(error.code);
        res.json(error.name + ' : ' + error.message);
    }
}

/**
 *
 * @param req
 * @param res
 */
function selectOneById(req, res) {
    database.selectOneById(tableName, req.query.id)
        .then((result) => {
            res.json(result.data);
        })
        .catch((error) => {
            res.status(500)
            res.json(error);
        })
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
function deleteObj(req, res) {
    database.deleteObj(tableName, req.query.id)
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
 * @type {{createObj: ((function(*, *): Promise<void>)|*), selectAll: ((function(*, *): Promise<void>)|*), deleteObj: ((function(*, *): Promise<void>)|*), selectOneById: ((function(*, *): Promise<void>)|*), updateObj: ((function(*, *): Promise<void>)|*)}}
 */
module.exports = {
    selectAll,
    selectOneById,
    createObj,
    updateObj,
    deleteObj
}






