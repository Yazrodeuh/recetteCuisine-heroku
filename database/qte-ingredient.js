const axios = require('axios');

const database = require("./requestDatabase");
const tableName = "qte-ingredient";

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
        console.log(error)
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

    //TODO add request to create recipe before create recipeIngredient
    //TODO add request to create step before create recipeIngredient

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

    }
}

/**
 *
 * @param req
 * @param res
 */
async function selectCompleteRecipe(req, res) {
    try {
        const response = await axios.get(database.url + tableName + "?q={\"recipe.0\":{\"id\": "+ req.params.id + "}}", database.headers);
        res.json(response.data);
    } catch (error) {
        error.response ? res.status(error.response.status) : res.status(500);
        res.json(error.name + ' : ' + error.message);
    }
}


module.exports = {
    selectAll, selectOneById, createObj, updateObj, deleteObj, selectCompleteRecipe
}







