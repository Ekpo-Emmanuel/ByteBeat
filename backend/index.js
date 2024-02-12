require('dotenv').config();
const express = require('express');
const { MongoClient } = require("mongodb");
const cors = require('cors');
const multer = require('multer');

const app = express();
app.use(cors());

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

const database = client.db(process.env.MONGODB_DB);


app.listen(8000, () => {
    // console.log("server started on port 8000");
    MongoClient.connect(uri, (err, client) => {
        if (err) {
            console.error("Error connecting to MongoDB:", err);
            // process.exit(1);
        } else {
            console.log("Connected to MongoDB");
        }
    });
});

app.get("/", (req, res) => {
    database.collection("bytebeatcollection").find({}).toArray((err, result) => {
        if (err) {
            console.error("Error fetching data from MongoDB:", err);
            res.status(500).send("Error fetching data from MongoDB");
        } else {
            res.send(result);
        }
    })
})
