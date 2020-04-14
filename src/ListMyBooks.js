import React, {Component} from 'react'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'
import './App.css'

class ListMyBooks extends Component {

  componentDidMount(){
    this.props.emptyResults()
  }
  
  render(){
    const { 
      books, 
      updateBookList, 
      shelves, 
      removeFromMyBooks } = this.props
      
    return(
      <div>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            {shelves && Object.keys(shelves).map((shelfName) => {
              return(
                <BookShelf 
                  className="bookshelf"
                  key = {shelfName}
                  canonicalShelfName = {shelfName}
                  shelfName = {shelves[shelfName]}
                  books = {books}
                  updateBookList = {updateBookList}
                  removeFromMyBooks ={removeFromMyBooks}
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
  shelves: PropTypes.object.isRequired,
  removeFromMyBooks: PropTypes.func.isRequired,
  emptyResults: PropTypes.func.isRequired
}

export default ListMyBooks