var tape = require("tape"),
    isError = require("../src/index");


tape("isError(value) should return true when the value is a Error", function(assert) {
    assert.equal(isError(new Error()), true);
    assert.end();
});
