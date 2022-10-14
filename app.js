require('dotenv').config();
const express = require('express');
const cors = require('cors');  
const { connectDB } = require('./config/mongo');

const routers = require('./app/routes');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json())
app.use('/api/v1.0', routers);

connectDB();
app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})

