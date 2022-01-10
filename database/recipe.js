const database = require("./requestDatabase");
const tableName = "recipe";

/**
 *
 * @param req
 * @param res
 */
function selectAll(req, res) {
    database.selectAll(tableName)
        .then((result) => {
            res.json(result.data);
        })
        .catch((error) => {
            res.status(500)
            res.json(error);
        });
}

/**
 *
 * @param req
 * @param res
 */
function selectOneById(req, res) {
    database.selectOneById(tableName, req.query.id)
        .then((result) => {
            res.json(result.data);
        })
        .catch((error) => {
            res.status(500)
            res.json(error);
        })
}

/**
 *
 * @param req
 * @param res
 */
function createObj(req, res) {
    database.createObj(tableName, req.body)
        .then((result) => {
            res.json(result.data);
        })
        .catch((error) => {
            res.statusCode(500)
            res.json(error);
        });
}

/**
 *
 * @param req
 * @param res
 */
function updateObj(req, res) {

    if (req.user.email === req.body.recipe.user.email) {
        database.updateObj(tableName, req.body)
            .then((result) => {
                res.json(result.data);
            })
            .catch((error) => {
                res.statusCode(500)
                res.json(error);
            });
    } else {
        res.status(401);
        res.json("Unauthorized");
    }

}

/**
 *
 * @param req
 * @param res
 */
function deleteObj(req, res) {
    if (req.user.email === req.body.recipe.user.email) {
        database.deleteObj(tableName, req.query.id)
            .then((result) => {
                res.json(result.data);
            })
            .catch((error) => {
                res.statusCode(500)
                res.json(error);
            });
    } else {
        res.status(401);
        res.json("Unauthorized");
    }
}


/**
 *
 * @type {{createObj: ((function(*, *): Promise<void>)|*), selectAll: ((function(*, *): Promise<void>)|*), deleteObj: ((function(*, *): Promise<void>)|*), selectOneById: ((function(*, *): Promise<void>)|*), updateObj: ((function(*, *): Promise<void>)|*)}}
 */
module.exports = {
    selectAll,
    selectOneById,
    createObj,
    updateObj,
    deleteObj
}