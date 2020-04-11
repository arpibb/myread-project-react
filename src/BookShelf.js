import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './App.css'
import Book from './Book'

class BookShelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
  }
  render(){
    const { books, shelfName, updateBookList, canonicalShelfName } = this.props
    return(
      <div>
        <h2 className="bookshelf-title">{shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books && books.filter(book => book.shelf === canonicalShelfName).map((book,idx)=>{
              console.log(books)
              return(
                <li key={idx}>
                  <Book
                    book = {book}
                    title = {book.title}
                    thumbnail = {book.imageLinks.smallThumbnail}
                    authors = {book.authors}
                    updateBookList = {updateBookList}
                    shelf = {book.shelf}
                  />
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    )
  }
}
export default BookShelf