const axios = require("axios");


async function requestDB(url){
    return await axios.get("https://recettecuisine-d83f.restdb.io/rest/" + url, {
        headers: {
            "x-apikey": process.env.XAPIKEY
        }
    })
}