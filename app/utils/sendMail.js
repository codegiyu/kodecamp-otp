const sendMail = require("nodemailer");
require("dotenv").config();

const options = {
    service: "gmail",
    auth: {
        user: "codegiyu@gmail.com",
        pass: process.env.googlePassword
    }
}

const send = sendMail.createTransport(options);

module.exports = { send };