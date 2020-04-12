import React, {Component} from 'react'
import './App.css'
import SearchBooksBar from './SearchBooksBar'
import SearchResults from './SearchResults'

class SearchBooks extends Component {
  render(){
    const {books,searchBookList, queryResults } = this.props
    return(
      <div>
        <SearchBooksBar 
        searchBookList = {searchBookList}
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