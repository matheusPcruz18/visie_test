const express = require('express');
const routes = require('./routes');
const dotenv = require('dotenv');
var cors = require('cors');
dotenv.config();
require("./database");

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(8000, () => {
  console.log('Server is running on port: 8000')
});