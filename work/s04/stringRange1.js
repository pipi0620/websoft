/**
 * @author Lingjia Chen
 */

"use strict";

module.exports = {
    //a module that exports the function stringRange() so that it can be used by main().
    //objects are constructed with curly brackets {}. Inside the object is what to export.
    "stringRange": stringRange,
    //"function2": anotherFunction
};

function stringRange(a, b, sep = ", ") {
    let res = "";
    let i = a;

    while (i < b) {
        res += i + sep;
        i++;
    }

    res = res.substring(0, res.length - sep.length);
    return res;
}
