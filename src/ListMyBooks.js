import React, {Component} from 'react'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'
import './App.css'


class ListMyBooks extends Component {
  
  render(){
    const { books, updateBookList, shelves } = this.props
    return(
      <div>
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
            {shelves && Object.keys(shelves).map((shelfName,idx) => {
              console.log(shelves)
              return(
                <BookShelf 
                  className="bookshelf"
                  key = {idx}
                  canonicalShelfName = {shelfName}
                  shelfName = {shelves[shelfName]}
                  books = {books}
                  updateBookList = {updateBookList}
                  />
            )})}
        </div>
      </div>
      </div>
    )
  }
}

ListMyBooks.propTypes = {
  books: PropTypes.array.isRequired,
  updateBookList: PropTypes.func.isRequired,
  shelves: PropTypes.array.isRequired
}

export default ListMyBooks