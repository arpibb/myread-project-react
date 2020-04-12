import React, {Component} from 'react'
import './App.css'
import BooksApp from './App'
import Book from './Book'

class SearchResults extends Component {
  render(){
    const { queryResults } = this.props
    
    return(
      <div className="search-books-results">
        <ol className="books-grid">
          {queryResults && queryResults.length !==0 && queryResults.map((book,idx) => {
            return(
              <li key={idx}>
                  <Book
                    book = {book}
                    title = {book.title}
                    thumbnail = {book.imageLinks ? book.imageLinks.smallThumbnail : '' }
                    authors = {book.authors}
                    shelf = {book.shelf ? book.shelf : 'none'}
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