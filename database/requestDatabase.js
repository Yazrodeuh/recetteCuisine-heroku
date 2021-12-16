const axios = require("axios");

/**
 *
 * @param url
 * @returns {Promise<AxiosResponse<any>>}
 */
async function request(url){
    return await axios.get("https://recettecuisine-d83f.restdb.io/rest/" + url, {
        headers: {
            "x-apikey": process.env.XAPIKEY
        }
    })
}

/**
 *
 * @param url
 * @param req
 * @param res
 */
function select(url, req, res){
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
function selectOne(id, dbName, req, res){
    select(dbName + "?q={id:" + id + "}", req, res);
}




module.exports = {
    request, select, selectOne
}