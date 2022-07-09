const database = (() => {
  const _database = {
    621: { id: 621, name: "XxDragonSlayerxX", friends: [123, 251, 631] },
    123: { id: 123, name: "FriendNo1", friends: [621, 631] },
    251: { id: 251, name: "SecondBestFriend", friends: [621] },
    631: { id: 631, name: "ThirdWh33l", friends: [621, 123, 251] },
  };

  const getUser = (id) =>
    new Promise((res, rej) => {
      setTimeout(() => {
        _database[id] ? res(_database[id]) : rej(new Error("not_found"));
      }, 300);
    });

  const listUserIDs = () => Promise.resolve([621, 123, 251, 631]);

  return { getUser, listUserIDs };
})();

exports.getUser = async (userId) => {
  const { getUser } = database;
  const user = await getUser(userId);
  const friends = [];
  for (const friendId of user.friends) {
    friends.push(await getUser(friendId));
  }
  return {
    ...user,
    friends,
  };
};
