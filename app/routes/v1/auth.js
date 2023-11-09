const express = require("express");
const router = express.Router();
const { login, register, forgotPassword, resetPassword } = require("../../controllers/auth");
const { validateRequest } = require("../../middlewares");

router.post("/register", validateRequest("v1/auth/register"), register);
router.post("/login", validateRequest("v1/auth/login"), login);
router.post("/forgot-password", validateRequest("v1/auth/forgot-password"), forgotPassword);
router.post("/reset-password", validateRequest("v1/auth/reset-password"), resetPassword);

module.exports = router;