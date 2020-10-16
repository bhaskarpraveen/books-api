const mongoose = require('mongoose');

let BookSchema = mongoose.Schema({
    name: {type:String,required:true},
    description:{type:String,required:true}, 
    pagecount: {type:String,required:true},
    date:{type:Date,required:true},
    author: {type:String,required:true}
})

let books = module.exports = mongoose.model('Books',BookSchema)