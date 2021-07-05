const express = require('express') 
const app = express()
require('dotenv').config();
const cors = require('cors');
app.use(cors())
app.use(express.json());
const axios = require('axios'); 

//file ========================================

const PORT =process.env.PORT
const getData = require('./Controller/GetData.controller')

const addData = require('./Controller/AddData.controller')

const getFav = require('./Controller/GetFav.controller')

const deleteFav = require('./Controller/Delete.controller')

const updateForm = require('./Controller/Update.controller')
//rout =====================

const mongoose = require('mongoose');
const { request } = require('express');

app.get('/getData',
getData
)

app.post('/addData', 
addData
)

app.get('/getFav',
getFav
)

app.delete('/deleteFav',
deleteFav
)

app.put('/updateForm',
updateForm
)

app.get('/', 
 function (req, res) {
  res.send('Hello World')
})

 
app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});