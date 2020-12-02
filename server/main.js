const express = require("express");
const bodyParser = require("body-parser");
const morgan = require('morgan')


const routers = require('./routes')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('common'))

app.use(routers)

const PORT = process.env.PORT || 3010;

app.listen(PORT, () => {
  console.log(`SERVER RUNING...`);
});
