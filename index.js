const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./src/router')
const bodyParser = require('body-parser');
require('dotenv').config();
const port = process.env.PORT;


// app.use((req, res, next) => {
//     res.setHeader('Acces-Control-Allow-Origin', '*');
//     res.setHeader('Acces-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTION');
//     res.setHeader('Acces-Control-Allow-Headers', 'Content-Type, Authorization');
//     next();
// })

app.use(cors())
app.use(bodyParser.json())
app.use('/', router)



mongoose.connect(process.env.DB_String, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=> {app.listen(port, ()=> {console.log(`app runnning on port http://localhost:${port}`)})})
.catch((err)=> console.log(err))
