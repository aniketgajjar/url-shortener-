require('dotenv').config();
const app = require('./src/app');
const connectDB = require('./src/config/db');


connectDB();
const PORT = process.env.PORT;


app.listen( PORT || process.env.PORT, async () => {
    try {
        await console.log(`Server is Running on ${PORT} PORT!`)
    } catch (err) {
        console.log(`Error : Message : ${err}`);
    };
});