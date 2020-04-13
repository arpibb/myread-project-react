import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './App.css'
import Book from './Book'

class BookShelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
  }
  render(){
    const { books, shelfName, updateBookList, canonicalShelfName,removeFromMyBooks } = this.props
    return(
      <div>
        <h2 className="bookshelf-title">{shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books && books.filter(book => book.shelf === canonicalShelfName).map((book)=>{
              //console.log(books)
              return(
                <li key={book.id}>
                  <Book
                    book = {book}
                    title = {book.title}
                    thumbnail = {book.imageLinks? book.imageLinks.smallThumbnail : ''}
                    authors = {book.authors}
                    updateBookList = {updateBookList}
                    shelf = {book.shelf}
                    removeFromMyBooks ={removeFromMyBooks}
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

BookShelf.propTypes= {
  books: PropTypes.array.isRequired,
  updateBookList: PropTypes.func.isRequired,
  shelfName: PropTypes.string.isRequired,
  canonicalShelfName: PropTypes.string.isRequired,
}

export default BookShelf