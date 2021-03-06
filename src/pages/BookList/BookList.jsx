import React from 'react';
import BookCard from '../../components/BookCard/BookCard';





const BookList =(props ) =>{

 return(
    <div className="list">
{
    props.books.map((book) => {
    return <BookCard key={book.id} info={book}
    />
})
}
</div>

);
}

export default BookList;