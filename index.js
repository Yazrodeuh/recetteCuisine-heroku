const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000 // this is very important




app.get('/', function (req, res){
    res.send('Homepage')
})


const recipe = require("./database/recipe.js");
app.get('/recipe', recipe.selectAll);






app.listen(PORT, function () {
    console.log('Example app listening on port ' + PORT)
})


