const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const dislikeSchema = mongoose.Schema({
   userId: {
       type: Schema.Types.ObjectId,
       ref: 'User'
   },
   commentId: {
       type: Schema.Types.ObjectId,
       ref: 'Comment'
   },
   bookId: {
       type: Schema.Types.ObjectId,
       ref: 'Book'
   }

}, { timestamps: true })


module.exports = mongoose.model('Dislike', dislikeSchema);
