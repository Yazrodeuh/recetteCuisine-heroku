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
 * @returns {Promise<AxiosResponse<any>>}
 */
async function selectAll(tableName) {
    return await axios.get(url + tableName, headers);
}

/**
 * Select one item in a database with an id
 *
 * @param tableName
 * @param id
 */
async function selectOneById(tableName, id) {
    return await axios.get(url + tableName + "?q={id:" + id + "}", headers);
}


/**
 * Insert object in Database
 *
 * @param tableName
 * @param data
 * @returns {Promise<AxiosResponse<any>>}
 */
async function createObj(tableName, data){
    return await axios.post(url + tableName, data, headers);
}

/**
 * Update object in Database
 *
 * @param tableName
 * @param data
 * @returns {Promise<AxiosResponse<any>>}
 */
async function updateObj(tableName, data){
    return await axios.put(url + tableName, data, headers);
}

/**
 * Delete object in Database
 *
 * @param tableName
 * @param id
 * @returns {Promise<AxiosResponse<any>>}
 */
async function deleteObj(tableName, id){
    return await axios.delete(url + tableName + "?q={id:" + id + "}", headers);
}


module.exports = {
    selectAll,
    selectOneById,
    createObj,
    updateObj,
    deleteObj
}