const express = require('express');
const router = express.Router();
const UserController = require('./users.controller');

//phương thức post login
router.post('/createUser', UserController.create);
router.get('/getAll', UserController.getAll);
module.exports = router;