'use strict';

const {movieSchema, movieModel } = require('../Model/movie.model')

const getFav = (req, res) => {

movieModel.find ({},(error,  data)=>{

    // console.log(data)
    res.send(data)

})

}




module.exports = getFav