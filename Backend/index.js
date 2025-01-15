const express = require('express')
const app = express()
const port = process.env.PORT || 3001;
const dotenv = require('dotenv');

dotenv.config();

const cors = require('cors')
const router = require('./Routes/router')

app.use(cors());
app.use(express.json());

app.use(router);

const connectToMongo = require('./db')
connectToMongo(); 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


