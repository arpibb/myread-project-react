import React, {Component} from 'react'
import './App.css'
import SearchBooksBar from './SearchBooksBar'
import SearchResults from './SearchResults'

class SearchBooks extends Component {

  render(){
    const {books,searchBookList, updateBookList,removeFromMyBooks, queryResults, emptyResults, booksIDs, addToBookList } = this.props
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
        />
      </div>
    )
  }
}

export default SearchBooks