const UserList = require("../fake-data");

const resolvers = {
  Query: {
    users() {
      return UserList;
    },
    user: (parent, args) => {
      let resp = null;
      UserList.forEach((data) => {
        if (Number(args.id) == data.id) resp = data;
      });

      console.log(parent);
      return resp;
    },
  },
};

module.exports = { resolvers };
