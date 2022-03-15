const express = require('express')
const app = express()
const cors = require('cors');
const bodyParser = require('body-parser');
const Authentification = require('./authentification/authentification.js');

require("dotenv").config();
const PORT = process.env.PORT || 8000 // this is very important


app.use(cors({origin: ["*"]}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use(Authentification.passeport.initialize())


app.get('/', function (req, res) {
    res.redirect("https://marmitonlike.netlify.app")
})

//Router for recipes
app.use('/recipes', require('./routers/recipeRouter.js'))

// user recipes
app.use('/myrecipes', require('./routers/userRecipesRouter.js'))

//Router for users
app.use('/user', require('./routers/userRouter'))

//TEST authentification
app.post('/login', async (req, res) => {
    const result = Authentification.login(req.body.email, req.body.password);
    res.status(result.status);
    res.json(result.message);
})
app.get('/private', Authentification.passeport.authenticate('jwt', {session: false}), (req, res) => {
    res.send('private. user : ' + req.user.email);
})

app.listen(PORT, function () {
    console.log('Example app listening on port ' + PORT)
})


