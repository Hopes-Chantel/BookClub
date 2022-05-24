const Book = require('../models/book');

module.exports = {
    create,
    deleteFavorite
}

async function create(req, res){

    try {
		// need to find the book by the Id 
        const book = await Book.findById(req.params.id);
		
        book.favorites.push({username: req.user.username, userId: req.user._id}); //mutating a document
        await book.save()// save it
        res.status(201).json({data: 'favorite added'})
    } catch(err){
    
        res.status(400).json({err})
    }
    
}

async function deleteFavorite(req, res){
    try {
        
        const book = await Book.findOne({'book._id': req.params.id, 'book.username': req.user.username});
        book.favorites.remove(req.params.id) // mutating a document
		console.log(book, " <-= post in delete!")
        // req.params.id is the favorites id 
        await post.save() //save
        res.json({data: 'favorite removed'})
    } catch(err){
        res.status(400).json({err})
    }
}