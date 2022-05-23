const mongoose = require('mongoose')
const { Schema } = require('mongoose');
const {ObjectId} = mongoose.Schema.Types


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