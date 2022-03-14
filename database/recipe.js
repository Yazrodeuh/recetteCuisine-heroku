const database = require("./requestDatabase");
const axios = require("axios");
const tableName = "recipe";

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
        error.response ? res.status(error.response.status) : res.status(500);
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
        const response = await database.selectOneById(tableName, req.params.id);
        res.json(response.data);
    } catch (error) {
        error.response ? res.status(error.response.status) : res.status(500);
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
        const body = req.body;
        body.user = await database.selectOneById("user-list", req.user.email);
        const response = await database.createObj(tableName, req.body);
        res.json(response.data);
    } catch (error) {
        error.response ? res.status(error.response.status) : res.status(500);
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
        const response = await database.updateObj(tableName, req.body);
        res.json(response.data);
    } catch (error) {
        error.response ? res.status(error.response.status) : res.status(500);
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
        const response = await database.deleteObj(tableName, req.params.id);
        res.json(response.data);
    } catch (error) {
        error.response ? res.status(error.response.status) : res.status(500);
        res.json(error.name + ' : ' + error.message);
    }
}

/**
 *
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
async function userRecipe(req, res) {
    try {
        const response = await axios.get(database.url + tableName + "?q={\"user.0\": {\"email\": \"" + req.user.email + "\" }}", database.headers);
        res.json(response.data);
    } catch (error) {
        error.response ? res.status(error.response.status) : res.status(500);
        res.json(error.name + ' : ' + error.message);
    }
}


module.exports = {
    selectAll, selectOneById, createObj, updateObj, deleteObj, userRecipe
}