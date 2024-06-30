const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');
// const authMiddleware = require('../middleware/auth');

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);

module.exports = router;