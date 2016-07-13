var isObject = require("@nathanfaucett/is_object");


var objectToString = Object.prototype.toString;


module.exports = isError;


function isError(value) {
    return (
        isObject(value) &&
        typeof(value.message) === "string" &&
        objectToString.call(value) === "[object Error]"
    ) || false;
}
