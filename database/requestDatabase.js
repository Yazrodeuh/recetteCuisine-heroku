const axios = require("axios");

const url = 'https://recettecuisine-d83f.restdb.io/rest/';
const headers = {
    headers: {
        "x-apikey": "92b2bae27ab0b1d2f3fb12ae20167b71425d6"
    }
}

/**
 *
 * @param tableName
 * @returns {Promise<AxiosResponse<any>>}
 */
async function request(tableName) {
    return await axios.get(url + tableName, headers)
}

/**
 *
 * @param url
 * @param req
 * @param res
 */
function select(url, req, res) {
    request(url)
        .then(r => res.json(r.data))
        .catch(err => res.json(err));
}

/**
 *
 * @param id
 * @param dbName
 * @param req
 * @param res
 */
function selectOne(id, dbName, req, res) {
    select(dbName + "?q={id:" + id + "}", req, res);
}


module.exports = {
    request, select, selectOne,url,headers
}