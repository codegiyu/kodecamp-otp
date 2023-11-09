const express = require("express");
const mongoose = require("mongoose");
const v1AuthRoute = require("./app/routes/v1/auth");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 4000;

const { mongoUserName, password, clusterName, dbName } = process.env;
const mongoDB_URI = `mongodb+srv://${mongoUserName}:${password}@${clusterName}.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongoose.connect(mongoDB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(() => console.log("Database connected!"))
.catch((err) => console.log(`Error connecting to database! `, err));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.send("OTP test database is online!");
})

app.use("/v1/auth", v1AuthRoute);

app.listen(port, () => console.log("App started and lisening on port ", port));

module.exports = { app };