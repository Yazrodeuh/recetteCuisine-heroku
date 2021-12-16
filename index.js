const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000 // this is very important
const axios = require("axios")




app.get('/', function (req, res){
    app.send('Homepage')
})


app.listen(PORT, function () {
    console.log('Example app listening on port ' + PORT)
})


