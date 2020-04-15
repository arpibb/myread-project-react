import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'
import './App.css'

const SearchResults = (props) => {
  const { 
    books,
    updateBookList,
    queryResults,
    booksIDs,
    addToBookList,
    removeFromMyBooks,
    shouldRender } = props

  let shelf
  let bookIDKeys = Object.keys(booksIDs)
  
  return(
    <div className="search-books-results">
      <ol className="books-grid">
        {shouldRender && queryResults && queryResults.length !==0 && bookIDKeys.length === books.length && queryResults.map((book) => {
          if(bookIDKeys.includes(book.id)){
            let indexOfBook = booksIDs[book.id]
            shelf = books[indexOfBook].shelf
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
                removeFromMyBooks = {removeFromMyBooks}
              />
            </li>
          )
        })}
      </ol>
    </div>
  )
}


SearchResults.propTypes = {
  books: PropTypes.array.isRequired,
  booksIDs: PropTypes.object.isRequired,
  addToBookList: PropTypes.func.isRequired,
  updateBookList: PropTypes.func.isRequired,
  removeFromMyBooks: PropTypes.func.isRequired,
  queryResults: PropTypes.array.isRequired,
}

export default SearchResults