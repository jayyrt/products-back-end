require('dotenv').config()
const express = require('express');
const massive = require('massive');
const { createProduct, getOne, getAll, updateProduct, deleteProduct } = require('./productsController');

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

app.get('/api/products', getAll)
app.get('/api/products/:id', getOne)
app.put('/api/products/:id', updateProduct)
app.post('/api/products', createProduct)
app.delete('/api/products/:id', deleteProduct)

const PORT = process.env.SERVER_PORT;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));