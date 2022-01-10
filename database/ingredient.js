const database = require("./requestDatabase");
const tableName = "ingredient";

/**
 *
 * @param req
 * @param res
 */
async function selectAll(req, res) {
    try {
        const response = await database.selectAll(tableName);
        res.json(response.data);
    } catch (error) {
        res.status(error.code);
        res.json(error.name + ' : ' + error.message);
    }
}

/**
 *
 * @param req
 * @param res
 */
async function selectOneById(req, res) {
    try {
        const response = await database.selectOneById(tableName, req.query.id);
        res.json(response.data);
    } catch (error) {
        res.status(error.code);
        res.json(error.name + ' : ' + error.message);
    }
}

/**
 *
 * @param req
 * @param res
 */
async function createObj(req, res) {
    try {
        const response = await database.createObj(tableName, req.body)
        res.json(response.data);
    } catch (error) {
        res.status(error.code);
        res.json(error.name + ' : ' + error.message);
    }
}

/**
 *
 * @param req
 * @param res
 */
async function updateObj(req, res) {
    try {
        const response = await database.updateObj(tableName, req.body)
        res.json(response.data);
    } catch (error) {
        res.status(error.code);
        res.json(error.name + ' : ' + error.message);
    }
}

/**
 *
 * @param req
 * @param res
 */
async function deleteObj(req, res) {
    try {
        const response = await database.deleteObj(tableName, req.query.id)
        res.json(response.data);
    } catch (error) {
        res.status(error.code);
        res.json(error.name + ' : ' + error.message);
    }
}

/**
 *
 * @type {{createObj: ((function(*, *): Promise<void>)|*), selectAll: ((function(*, *): Promise<void>)|*), deleteObj: ((function(*, *): Promise<void>)|*), selectOneById: ((function(*, *): Promise<void>)|*), updateObj: ((function(*, *): Promise<void>)|*)}}
 */
module.exports = {
    selectAll, selectOneById, createObj, updateObj, deleteObj
}






