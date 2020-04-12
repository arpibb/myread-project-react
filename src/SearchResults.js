import React, {Component} from 'react'
import './App.css'
import Book from './Book'

class SearchResults extends Component {
  render(){
    const { books, updateBookList, queryResults, booksIDs, addToBookList, removeFromMyBooks } = this.props
    let shelf
    //console.log(books)
    return(
      <div className="search-books-results">
        <ol className="books-grid">
          {queryResults && queryResults.length !==0 && booksIDs && queryResults.map((book,idx) => {
            if(Object.keys(booksIDs).includes(book.id)){
              shelf = books[booksIDs[book.id]].shelf
              // console.log(shelf)
            }
            else{
              shelf = 'none'
            }
            return(
              <li key={idx}>
                <Book
                  book = {book}
                  title = {book.title}
                  thumbnail = {book.imageLinks ? book.imageLinks.smallThumbnail : '' }
                  authors = {book.authors}
                  shelf = {shelf}
                  addToBookList = {addToBookList}
                  updateBookList = {updateBookList}
                  removeFromMyBooks ={removeFromMyBooks}
                />
              </li>
            )
          })}
        </ol>
      </div>
    )
  }
}

export default SearchResults