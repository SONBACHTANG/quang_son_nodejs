const express = require('express');
const router = express.Router();
const AddNewUser = require('./addNewUser.controller');

// phương thức get giao diện login
router.get('/addNewUser', AddNewUser.addNewUser);

module.exports = router;