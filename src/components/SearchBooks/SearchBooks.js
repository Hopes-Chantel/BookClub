import React from 'react';


const SearchBooks = (props) => {
        return(
<div className="search-books">
<form onSubmit={props.bookSearch} action="">
    <input onChange={props.handleSearch} type="text" placeholder='Search Books' default='a'/>
    <button type ="submit">search</button> 
</form>
</div>
        );
    }

export default SearchBooks


//props.BookSearch fires off method when user searches