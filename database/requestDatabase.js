const axios = require("axios");

const url = 'https://recettecuisine-d83f.restdb.io/rest/';
const headers = {
    headers: {
        "x-apikey": "92b2bae27ab0b1d2f3fb12ae20167b71425d6"
    }
}

/**
 * SelectAll
 *
 * @param tableName
 * @param req
 * @param res
 * @returns {Promise<AxiosResponse<any>>}
 */
function selectAll(tableName, req, res) {
    axios.get(url + tableName, headers)
        .then((r) => {
            res.json(r.data);
        })
        .catch((e) => {
            res.statusCode(500)
            res.json(e);
        });
}

/**
 * Select one item in a database with an id
 *
 * @param tableName
 * @param id
 * @param req
 * @param res
 */
function selectOneById(tableName, id, req, res) {
    axios.get(url + tableName + "?q={id:" + id + "}", headers)
        .then((r) => {
            res.json(r.data);
        })
        .catch((e) => {
            res.statusCode(500)
            res.json(e);
        });
}


/**
 * Insert object in Database
 *
 * @param tableName
 * @param data
 * @param req
 * @param res
 * @returns {Promise<AxiosResponse<any>>}
 */
async function createObj(tableName, data, req, res) {
    return await axios.post(url + tableName, data, headers)
        .then((result) => {
            res.json(result.data);
        })
        .catch((error) => {
            res.statusCode(500)
            res.json(error);
        });
}

/**
 * Update object in Database
 *
 * @param tableName
 * @param data
 * @param req
 * @param res
 * @returns {Promise<AxiosResponse<any>>}
 */
async function updateObj(tableName, data, req, res) {
    return await axios.put(url + tableName, data, headers)
        .then((result) => {
            res.json(result.data);
        })
        .catch((error) => {
            res.statusCode(500)
            res.json(error);
        });
}

/**
 * Delete object in Database
 *
 * @param tableName
 * @param id
 * @param req
 * @param res
 * @returns {Promise<AxiosResponse<any>>}
 */
async function deleteObj(tableName, id, req, res) {
    return await axios.delete(url + tableName + "?q={id:" + id + "}", headers)
        .then((result) => {
            res.json(result.data);
        })
        .catch((error) => {
            res.statusCode(500)
            res.json(error);
        });
}


module.exports = {
    selectAll, selectOneById, createObj, updateObj, deleteObj
}