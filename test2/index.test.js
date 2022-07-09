const { getUser } = require(".");

const { assert, expect } = require("chai");
const chai = require("chai");
chai.use(require("chai-as-promised"));

describe("test2/index", () => {
  [
    {
      id: 621,
      expected: {
        id: 621,
        name: "XxDragonSlayerxX",
        friends: [
          { id: 123, name: "FriendNo1", friends: [621, 631] },
          { id: 251, name: "SecondBestFriend", friends: [621] },
          { id: 631, name: "ThirdWh33l", friends: [621, 123, 251] },
        ],
      },
    },
    {
      id: 251,
      expected: {
        id: 251,
        name: "SecondBestFriend",
        friends: [
          { id: 621, name: "XxDragonSlayerxX", friends: [123, 251, 631] },
        ],
      },
    },
    {
      id: 631,
      expected: {
        id: 631,
        name: "ThirdWh33l",
        friends: [
          { id: 621, name: "XxDragonSlayerxX", friends: [123, 251, 631] },
          { id: 123, name: "FriendNo1", friends: [621, 631] },
          { id: 251, name: "SecondBestFriend", friends: [621] },
        ],
      },
    },
  ].forEach(({ id, expected }) => {
    it(`should return expected user for id: ${id}`, async () => {
      const actual = await getUser(id);

      assert.deepEqual(actual, expected);
    });
  });
  it("should throw exception if user is not found", async () => {
    const sut = () => getUser(350);

    await expect(sut()).to.be.rejectedWith("not_found");
  });
});
