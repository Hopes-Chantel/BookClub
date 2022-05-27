const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const likeSchema = mongoose.Schema({
   userId: {
       type: Schema.Types.ObjectId,
       ref: 'User'
   },
   bookId: {
       type: Schema.Types.ObjectId,
       ref: 'Book'
   }

}, { timestamps: true })


module.exports = mongoose.model('Like', likeSchema);