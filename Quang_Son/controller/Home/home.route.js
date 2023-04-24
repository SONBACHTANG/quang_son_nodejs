const express = require('express');
const router = express.Router();
const home = require('./home.controller');

// phương thức get giao diện login
router.get('/home', home.get);

module.exports = router;