require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
    // mongoose
    //     .connect(process.env.MONGO_URI, {
    //         useNewUrlParser: true,
    //         useUnifiedTopology: true,
    //     })
    //     .then(() => console.log('MongoDB connected'))
    //     .catch((err) => console.log(err));
})
