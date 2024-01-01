const { UserRepository } = require("../repository");
//? all routes controller
const getAll = (req, res) => {
  res.send("hellow router");
};

const creatUser = async (req, res) => {
  try {
    const user = await UserRepository.createUserData(req.body);
    return res.status(201).json({
      data: user,
      succes: true,
      meassage: "Successfully created user",
      error: {},
    });
  } catch (error) {
    throw error;
    return res.status(500).json({
      data: {},
      succes: false,
      meassage: "some error occured",
      error: error,
    });
  }
};
module.exports = {
  getAll,
  creatUser,
};
