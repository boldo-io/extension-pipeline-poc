const express = require('express');
const router = express.Router();

const AuthCtrl = require("../controllers/auth");

router
  .post("/login", AuthCtrl.login)
  .post("/register", AuthCtrl.register);

module.exports = router;
