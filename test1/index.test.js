const assert = require("chai").assert;
const structurize = require('./index').structurize;

describe('test1/index', () => {
  [
    {
      name: "Michael Daniel Jäger",
      expected: { first: "Michael", middle: ["Daniel"], last: "Jäger" }
    },
    {
      name: "LINUS HARALD christer WAHLGREN",
      expected: { first: "Linus", middle: ["Harald", "Christer"], last: "Wahlgren" },
    },
    {
      name: "Pippilotta Viktualia Rullgardina Krusmynta Efraimsdotter LÅNGSTRUMP",
      expected: {
        first: "Pippilotta",
        middle: ["Viktualia", "Rullgardina", "Krusmynta", "Efraimsdotter"],
        last: "Långstrump",
      },
    },
    {
      name: "Kalle Anka",
      expected: { first: "Kalle", middle: [], last: "Anka" },
    },
    {
      name: "Ghandi",
      expected: { first: "Ghandi", middle: [], last: null },
    },
    {
      name: "",
      expected: { first: null, middle: [], last: null },
    },
    {
      name: "     ",
      expected: { first: null, middle: [], last: null },
    },
    {
      name: null,
      expected: { first: null, middle: [], last: null },
    }
  ].forEach(({ name, expected }) => {
    it(`should structure given name (${name}) correctly`, () => {

      const actual = structurize(name);

      assert.deepEqual(actual, expected);
    })
  });
});