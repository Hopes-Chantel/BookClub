const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const unlikeSchema = mongoose.Schema({
   userId: {
       type: Schema.Types.ObjectId,
       ref: 'User'
   },
   bookId: {
       type: Schema.Types.ObjectId,
       ref: 'Book'
   }

}, { timestamps: true })


const Unlike = mongoose.model('Unlike', unlikeSchema);

module.exports = { Unlike }