import React from 'react';
import BookCard from '../../components/BookCard/BookCard';
import * as likesAPI from '../../utils/likeApi';



const BookList =(props,addLike, removeLike ) =>{

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