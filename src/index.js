var isObjectLike = require("is_object_like");


var objectToString = Object.prototype.toString;


module.exports = isError;


function isError(obj) {
    return (
        isObjectLike(obj) &&
        typeof(obj.message) === "string" &&
        objectToString.call(obj) === "[object Error]"
    ) || false;
}
