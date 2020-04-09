import React, {Component} from 'react'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'
import './App.css'

class ListMyBooks extends Component {
  
  render(){
    console.log(this.props.books)
    const { books } = this.props
    const shelfNames = ['currentlyReading', 'wantToRead', 'read']
    return(
      <div>
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
            {shelfNames.map((shelfName,idx) => {
              return(
                <BookShelf 
                  className="bookshelf"
                  key = {idx}
                  shelfName = {shelfName}
                  books = {books}
              />
            )})}
        </div>
      </div>
      </div>
    )
  }
}

export default ListMyBooks