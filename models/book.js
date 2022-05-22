const mongoose = require('mongoose')
const { Schema } = require('mongoose');
const {ObjectId} = mongoose.Schema.Types


// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const bookSchema = new Schema({
  authors: [
    {
      type: String,
    },
  ],
  description: {
    type: String,
    required: true,
  },
  // saved book id from GoogleBooks
  bookId: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  link: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  likes:[{type:ObjectId,ref:"User"}],
  comments:[{
      text:String,
      postedBy:{type:ObjectId,ref:"User"}
  }],
});

module.exports = mongoose.model('Book', bookSchema);