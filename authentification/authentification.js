const passeport = require("passport");
const jwt = require('jsonwebtoken')
const passportJwt = require('passport-jwt')
const secret = 'recette-de-cuisine'
const ExtractJwt = passportJwt.ExtractJwt
const JwtStrategy = passportJwt.Strategy

const User = require('./user.js')

/**
 *
 * @type {{jwtFromRequest, secretOrKey: string}}
 */
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: secret
}


passeport.use(
    new JwtStrategy(jwtOptions, function (payload, next){
        const user = User.find((user => user.username === payload.username))
        user ? next(null, user) : next(null, false);
    })
)

/**
 *
 * @param {string} email
 * @param {string} password
 * @returns {{message: string, status: number}}
 */
function login(email, password){

    if (!email || !password){
       return  {
            status: 401,
            message: 'Email or password was not provided.'
        }
    }

    const user = User.find(user => user.email === email);

    if(!user || user.password !== password){
        return  {
            status: 401,
            message: 'Email / password do not match.'
        }
    }

    const userJwt = jwt.sign({email: user.email}, secret);

    return {
        status: 200,
        message: userJwt
    }
}


module.exports = {
    passeport,
    login
}



