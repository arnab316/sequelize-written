# Sequelize basics

- This is the small project where i'm gonna be working on sequelize manually

- Kindly setUp Model File

.
├── ...
├── src  
│ |--- models  
│ |-- index.js
│
│
│  
└── ...

```
"use strict";
const { Sequelize, DataTypes, Model } = require("sequelize");

// * Passing parameters separately (other dialects)
const sequelize = new Sequelize(
  "<DB_NAME>",
  "<DB_USER_NAME",
  "<YOUR_DB_PASSWORD>", //? database', 'username', 'password',
  {
    host: "localhost",
    dialect: "mysql",
  }
);

//? checkin database connection isValid or not
const Okconnect = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
//? Calling connect fn
Okconnect();

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.users = require("./users")(sequelize, DataTypes);

if (process.env.DB_SYNC) {
  db.sequelize.sync({ alter: true });
}
module.exports = db;

```
