import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './App.css'
import Book from './Book'

class BookShelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
  }
  render(){
    const { books, shelfName } = this.props
    return(
      <div>
        <h2 className="bookshelf-title">{shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books && books.filter(book => book.shelf === shelfName).map((book)=>{
              return(
                <li>
                  <Book
                    title = {book.title}
                    thumbnail = {book.imageLinks.thumbnail}
                    
                  />
                </li>
            )})}
          </ol>
        </div>
      </div>
    )
  }
}
export default BookShelf