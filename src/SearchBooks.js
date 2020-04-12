import React, {Component} from 'react'
import './App.css'
import SearchBooksBar from './SearchBooksBar'
import SearchResults from './SearchResults'

class SearchBooks extends Component {
  render(){
    const {books,searchBookList, queryResults, emptyResults } = this.props
    return(
      <div>
        <SearchBooksBar 
          searchBookList = {searchBookList}
          emptyResults = {emptyResults}
        />
        <SearchResults 
          books = { books }
          queryResults = {queryResults}
        />
      </div>
    )
  }
}

export default SearchBooks