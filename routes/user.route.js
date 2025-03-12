const express = require("express");
const {handleUserSignup,handleFindAllUsers} = require("../controller/user.ctlr");

const router = express.Router();

router.post('/register',handleUserSignup);

router.get('/all',handleFindAllUsers);

module.exports = router;