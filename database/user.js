const database = require("./requestDatabase");
const tableName = "user-list"

/**
 *
 * @param req
 * @param res
 */
async function selectAll(req, res) {
    await database.selectAll(tableName, req, res);
}

/**
 *
 * @param req
 * @param res
 */
async function selectOneById(req, res) {
    await database.selectOneById(tableName, req.query.id, req, res);
}

/**
 *
 * @param req
 * @param res
 */
async function createObj(req, res) {
    await database.createObj(tableName, req.body, req, res);
}

/**
 *
 * @param req
 * @param res
 */
async function updateObj(req, res) {
    await database.updateObj(tableName, req.body, req, res);
}

/**
 *
 * @param req
 * @param res
 */
async function deleteObj(req, res) {
    await database.deleteObj(tableName, req.query.id, req, res);
}

/**
 *
 * @type {{createObj: ((function(*, *): Promise<void>)|*), selectCompleteRecipe: selectCompleteRecipe, selectAll: ((function(*, *): Promise<void>)|*), deleteObj: ((function(*, *): Promise<void>)|*), selectOneById: ((function(*, *): Promise<void>)|*), updateObj: ((function(*, *): Promise<void>)|*)}}
 */
module.exports = {
    selectAll,
    selectOneById,
    createObj,
    updateObj,
    deleteObj
}




