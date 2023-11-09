const mongoose = require("mongoose");
const userCollection = require("./userModel");
const forgotPasswordCollection = require("./forgotPasswordModel");

mongoose.set("strictQuery", false);
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.users = userCollection;
db.forgotPasswordInfos = forgotPasswordCollection;

module.exports = db;