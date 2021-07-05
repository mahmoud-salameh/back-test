'use strict';

require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect(`${process.env.MONGO_URL}/movie`, 
{useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('we are connected!'); 
});


const movieSchema = new mongoose.Schema({
    
    title: String,
    poster_path: String,
    overview: String,
  });

  const movieModel = mongoose.model('movie', movieSchema);
module.exports = {movieSchema,movieModel }