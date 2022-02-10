const axios = require("axios");

const url = 'https://recettecuisine-d83f.restdb.io/rest/';
const headers = {
    headers: {
        "x-apikey": "92b2bae27ab0b1d2f3fb12ae20167b71425d6"
    }
};

/**
 * SelectAll
 *
 * @param tableName
 * @returns {Promise<AxiosResponse<any>>}
 */
function selectAll(tableName) {
    return axios.get(url + tableName, headers);
}

/**
 * Select one item in a database with an id
 *
 * @param tableName
 * @param id
 */
function selectOneById(tableName, id) {
    return axios.get(url + tableName + "?q={\"id\":" + id + "}", headers);
}


/**
 * Insert object in Database
 *
 * @param tableName
 * @param data
 * @returns {Promise<AxiosResponse<any>>}
 */
function createObj(tableName, data) {
    return axios.post(url + tableName, data, headers);
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
function updateObj(tableName, data) {
    return axios.put(url + tableName, data, headers);
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
async function deleteObj(tableName, id) {
    return await axios.delete(url + tableName + "?q={id:" + id + "}", headers);
}


module.exports = {
    selectAll, selectOneById, createObj, updateObj, deleteObj, url, headers
}