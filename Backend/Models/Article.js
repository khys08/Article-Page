const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ArticleModel = mongoose.Schema({
    Title:{
        type:String,
        required:true,
    },

    Content:{
        type:String,
        required:true,
    },

    Author:{
        type:String,
        required:true,
    }

},{timestamps:true})

module.exports = mongoose.model('Article',ArticleModel)