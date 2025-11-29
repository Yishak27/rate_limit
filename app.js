import express from "express";
import mongoose from "mongoose";
import dontenv from 'dotenv';
const app = express();

dontenv.config({
    path: ".env"
});

const port = process.env.PORT || 3090;
const mongoURL = process.env.DATABASE_CON_STRING;

app.use("/", async (req, res) => {
    try {
        return res.status(200).send({
            status: true,
            message: "Success."
        })
    } catch (error) {
        return res.status(500).send({
            status: false,
            message: "Internal server error"
        })
    }
});

mongoose.connect(mongoURL)
    .then(() => {
        console.log('Database connected successfully.');
    }).catch((err) => {
        console.log("Unable to connect to the database.");
    })

app.listen(port, () => {
    console.log("Backend ratelimit running on " + port);
})