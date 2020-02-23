/**
 * write the code at module level and refrain from using a main function
 * @author Lingjia Chen
 */

"use strict";

let utils = require("./stringRange1.js");
let res;

res = utils.stringRange(1, 10);
console.info(res);

res = utils.stringRange(1, 10, "-");
console.info(res);

console.log("\nWhat does the imported 'utils' consists of?");
console.log(utils);