const express = require("express");
const {createUser, getUser, getUsers} = require("../controllers/createusersController")
const router = express.Router()
router.post('/create-user', createUser)
router.get('/get-user/:id', getUser)
router.get('/get-users', getUsers)
module.exports = router