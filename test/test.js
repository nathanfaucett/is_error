var assert = require("assert"),
    isError = require("../src/index");


describe("isError", function() {
    it("should return true when the value is a Error", function() {
        assert.equal(isError(new Error()), true);
    });
});
