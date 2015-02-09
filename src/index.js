var isObjectLike = require("is_object_like");


var objectErrorStr = "[object Error]",
    objectToString = Object.prototype.toString;


module.exports = function isError(obj) {
    return (isObjectLike(obj) && typeof(obj.message) === "string" && objectToString.call(obj) === objectErrorStr) || false;
};
