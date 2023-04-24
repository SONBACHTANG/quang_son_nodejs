const express = require('express');
const router = express.Router();
const AllUsersList = require('./allUsersList.controller');

// phương thức get giao diện login
router.get('/allUsersList', AllUsersList.get);

module.exports = router;