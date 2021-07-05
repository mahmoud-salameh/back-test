'use strict';
const axios = require('axios'); 

const {movieSchema, movieModel } = require('../Model/movie.model')




const getData = (req,res)=> {


axios.get(`https://api.themoviedb.org/3/search/movie?api_key=2ab4e461941fb3e51bd7931da2ec93da&query=all`).

then(response => {
    res.send(response.data.results)
})

.catch(error => console.log(error));

}

module.exports = getData



