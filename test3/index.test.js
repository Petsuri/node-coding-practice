const { canAttack } = require(".");
const assert = require("chai").assert;

describe("test3/index", () => {
  [
    { a: ["C", 2], b: ["D", 4] },
    { a: ["F", 7], b: ["E", 5] },
    { a: ["C", 2], b: ["A", 1] },
    { a: ["A", 6], b: ["B", 4] },
  ].forEach(({ a, b }) => {
    it(`should be possible for a (${a}) to attack b (${b})`, () => {
      const actual = canAttack(a, b);

      assert.isTrue(actual);
    });
  });
  [
    { a: ["A", 6], b: ["B", 5] },
    { a: ["C", 2], b: ["C", 2] },
    { a: ["A", -1], b: ["B", 1] },
    { a: ["D", 4], b: ["E", 5] },
  ].forEach(({ a, b }) => {
    it(`should NOT be possible for a (${a}) to attack b (${b})`, () => {
      const actual = canAttack(a, b);

      assert.isFalse(actual);
    });
  });
});
