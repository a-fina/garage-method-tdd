var assert = require('assert');
var add = require("../index");

describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
  describe("Testa la somma", () => {
    it(" 2 + 2 = 4", () => {
      assert.equal(add(2, 2), 4);
    })
  });
});
