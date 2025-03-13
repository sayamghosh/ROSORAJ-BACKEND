const express = require("express");
const {handleUserSignup,handleGetAllUserName,handleUserLogin,handleLogout} = require("../controller/user.ctlr");

const router = express.Router();

router.post('/register',handleUserSignup);

router.post('/login',handleUserLogin);

router.get('/logout',handleLogout);

router.get('/all',handleGetAllUserName);

module.exports = router;