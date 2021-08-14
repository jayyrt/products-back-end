require('dotenv').config()
const express = require('express');
const massive = require('massive');

const app = express();

app.use(express.json());

massive({
    connectionString: process.env.CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false,
    }
})
.then((dbInstance) => {
    app.set('db', dbInstance);
    console.log('Database connection established successfully');
})
.catch((e) => {
    console.log('DB connection problem: ', e)
});

const PORT = process.env.SERVER_PORT;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));