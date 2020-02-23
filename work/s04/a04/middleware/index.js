/**
 * @author Lingjia Chen
 */

"use strict";

function logIncomingToConsole(req, res, next) {
    console.info(`Got request on ${req.path} (${req.method}).`);
    next();
}

module.exports = {
    logIncomingToConsole: logIncomingToConsole
};