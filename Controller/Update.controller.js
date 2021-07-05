'use strict'

const axios = require('axios'); 

const {movieSchema, movieModel } = require('../Model/movie.model')

const updateForm = (req, res) => {

const { title, overview, poster_path, id} = req.body;

movieModel.find({_id: id}, (error , data) => {


    data[0].title = title;
    data[0].overview = overview;
    data[0].poster_path = poster_path;
    data[0].save()
.then(() => {

    movieModel.find({} ,(error , data) => {

        res.send(data)
    })
})
})


// console.log(req.body);

}

module.exports = updateForm