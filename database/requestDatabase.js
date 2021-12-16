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
 * @param dbName
 * @param req
 * @param res
 */
function selectAll(dbName, req, res){
    request(dbName)
        .then(r => res.json(r.data))
        .catch(err => res.json(err));
}


module.exports = {
    request, selectAll
}