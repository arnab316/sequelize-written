const db = require("../models");
const database = db.users;
//! Not Working code
/*
class UserRepository {
  constructor() {
    this.Database = new database();

  }
  async createUser(name) {
    try {
      const user = await Database.create(name);
      return user;
    } catch (error) {
      console.log("Something went wrong in repository layer");
    }
  }
}*/

const createUserData = async (name) => {
  try {
    const user = await database.create(name);
    return user;
  } catch (error) {
    console.log("Something went wrong in repository layer");
  }
};

module.exports = {
  createUserData,
};
