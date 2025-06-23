const express = require('express');
const dotenv=require("dotenv");
const dbConnect = require('./config/dbConnect');
const {errorHandler,notFound}=require('./middlewares/errorMiddleware');

const userRoute = require('./routes/users/usersRoute');

const app = express();

//env
dotenv.config();

//dbConnect
dbConnect();

//middlewares
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to Financial Planning for Individuals API");
});


//routes
app.use("/api/users",userRoute);

//error
app.use(errorHandler);
app.use(notFound);

//income


//expenses


module.exports = app;

