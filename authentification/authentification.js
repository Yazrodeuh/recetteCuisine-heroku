const passeport = require("passport");
const jwt = require('jsonwebtoken')
const passportJwt = require('passport-jwt')
const secret = 'recette-de-cuisine'
const ExtractJwt = passportJwt.ExtractJwt
const JwtStrategy = passportJwt.Strategy
const database = require('../database/requestDatabase.js')

/**
 *
 * @type {{jwtFromRequest,secretOrKey: string}}
 */
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), secretOrKey: secret
};


passeport.use(
    new JwtStrategy(
        jwtOptions, async function (payload, next) {
            const users = (await database.selectAll("user-list")).data;
            const user = users.find((user => user.email === payload.email));
            user ? next(null, user) : next(null, false);
        })
);

/**
 *
 * @param {string} email
 * @param {string} password
 * @returns {{message: string, status: number}}
 */
async function login(email, password) {

    if (!email || !password) {
        return {
            status: 401, message: 'Email or password was not provided.'
        };
    }

    const users = (await database.selectAll("user-list")).data;
    const user = users.find(user => user.email === email);

    //const user = User.find(user => user.email === email);

    if (!user || user.password !== password) {
        return {
            status: 401, message: 'Email / password do not match.'
        };
    }

    const userJwt = jwt.sign({email: user.email}, secret);
    return {
        status: 200, message: userJwt
    }
}


module.exports = {
    passeport, login
}



