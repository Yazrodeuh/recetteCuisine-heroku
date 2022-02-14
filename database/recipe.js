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

async function userRecipe(req, res){
    try {
        const response = await axios.post(database.url + tableName + "?q={\"user\":" + req.body.userId + "}");
        res.json(response.data);
    }catch (error) {
        error.response ? res.status(error.response.status) : res.status(500);
        res.json(error.name + ' : ' + error.message);
    }
}

module.exports = {
    selectAll, selectOneById, createObj, updateObj, deleteObj, userRecipe
}