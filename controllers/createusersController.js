const usersModel = require("../models/usersModel");

const createUser = async (req, res) => {
  const { username, phone, avatar, typeUser } = req.body;
  const users = await usersModel.find();

  try {
    if (phone === users.map((data) => data.phone)) {
      res.status(200).json(`the number ${phone} is already taken`)
    } else {
      const newUser = new usersModel({ username, phone, avatar, typeUser });
      console.log('new user created', newUser)
      await newUser.save();
      res.status(201).json(newUser);
    }
  } catch (errors) {
    res.status(500).json({ message: errors.message });
  }
};

const getUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await usersModel.findById(id);
    if (user) {
      res.status(200).json(user);
    }
  } catch (errors) {
    res.status(500).json(errors);
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await usersModel.find();
    if (users) {
      res.status(200).json(users);
    }
  } catch (errors) {
    res.status(500).json(errors);
  }
};

module.exports = { createUser, getUser, getUsers };
