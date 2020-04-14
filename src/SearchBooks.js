import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './App.css'
import SearchBooksBar from './SearchBooksBar'
import SearchResults from './SearchResults'

class SearchBooks extends Component {

  render(){
    const {books, booksIDs, searchBookList, addToBookList, updateBookList, removeFromMyBooks, queryResults, emptyResults   } = this.props
    return(
      <div>
        <SearchBooksBar 
          searchBookList = {searchBookList}
          emptyResults = {emptyResults}
        />
        <SearchResults 
          books = { books }
          queryResults = {queryResults}
          booksIDs = {booksIDs}
          addToBookList = {addToBookList}
          updateBookList = {updateBookList}
          removeFromMyBooks = {removeFromMyBooks}
          emptyResults = {emptyResults}
        />
      </div>
    )
  }
}

SearchBooks.propTypes = {
  books: PropTypes.array.isRequired,
  booksIDs: PropTypes.object.isRequired,
  searchBookList: PropTypes.func.isRequired,
  addToBookList: PropTypes.func.isRequired,
  updateBookList: PropTypes.func.isRequired,
  removeFromMyBooks: PropTypes.func.isRequired,
  queryResults: PropTypes.array.isRequired,
  emptyResults: PropTypes.func.isRequired
}

export default SearchBooks