'use strict';

const {movieSchema,movieModel } = require('../Model/movie.model')


const addData = (req,res) => {

    const {title,overview,poster_path} = req.body;

const obj = new movieModel ({title: title, overview: overview, poster_path: poster_path  })

// console.log(obj);
obj.save()

}


module.exports = addData