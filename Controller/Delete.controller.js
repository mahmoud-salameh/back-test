'use strict';

const {movieSchema,movieModel } = require('../Model/movie.model')

const deleteFav = (req,res) => {
//   console.log(req.query)
  const id =req.query.id;
movieModel.findByIdAndDelete(id , (error ,data) =>{
    movieModel.find({},(err,data)=>{
        res.send(data);
    })
})

}




module.exports = deleteFav