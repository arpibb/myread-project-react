import React, {Component} from 'react'
import './App.css'
import SearchBooksBar from './SearchBooksBar'
import SearchResults from './SearchResults'

class SearchBooks extends Component {
  render(){
    return(
      <div>
        <SearchBooksBar />
        <SearchResults />
      </div>
    )
  }
}

export default SearchBooks