
import React, {Component} from 'react';
import SearchBooks from '../SearchBooks/SearchBooks';
import Header from '../Header/Header';
import BookList from '../../pages/BookList/BookList';
import request  from 'superagent';



class Books extends Component{
    constructor(props){
        super(props);
        this.state= {
            books:[],
            searchArea:''
        }
    }
 bookSearch= (e) => {
     e.preventDefault();
    request
        .get("https://www.googleapis.com/books/v1/volumes?&maxResults=40&key=AIzaSyAdjmZTKZ2rC_4R8vcTxGCrFl6uXNxuNJc")
        .query({q: this.state.searchArea})
        .then((data) =>{
            this.setState({ books: [...data.body.items]})
            //spread operator & grabbing all the items into the new array 
            // we want to pass the data from here to our booklist component. will creat a prop
            console.log(data);
                })
        //grabbing what the user put into the search area
}

handleSearch=(e) => {
    this.setState({searchArea: e.target.value})
    //sets state to whatever we are typing in the input box

}

render() {
    return(
        <div>
            <Header/>
            <SearchBooks bookSearch={this.bookSearch} handleSearch={this.handleSearch}/>
            <BookList books={this.state.books}/>
            
        </div>
    )
}
}

export default Books;
