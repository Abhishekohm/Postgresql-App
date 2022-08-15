const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const todoRouter = require('./rotues/todos.js')

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use('/todos', todoRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server runnig on port ${PORT}`);
})