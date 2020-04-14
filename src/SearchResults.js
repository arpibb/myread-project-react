import React, {Component} from 'react'
import './App.css'
import Book from './Book'

class SearchResults extends Component {

  render(){
    const { books, updateBookList, queryResults, booksIDs, addToBookList, removeFromMyBooks } = this.props
    let shelf
    let bookIDKeys = Object.keys(booksIDs)
    return(
      <div className="search-books-results">
        <ol className="books-grid">
          {queryResults && queryResults.length !==0 && bookIDKeys.length === books.length && queryResults.map((book) => {
            if(bookIDKeys.includes(book.id)){
              let indexOfBook = booksIDs[book.id]
              // console.log(indexOfBook)
              shelf = books[indexOfBook].shelf
              // console.log('shelf is:',shelf)
              // console.log(shelf)
            }
            else{
              shelf = 'none'
            }
            return(
              <li key={book.id}>
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