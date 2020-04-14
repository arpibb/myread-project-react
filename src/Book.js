import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './App.css'

class Book extends Component {

  handleChange = (event,book, shelf) => {
    const targetShelf = event.target.value
    if(targetShelf === 'none'){
      this.props.removeFromMyBooks(book)
    }
    if(shelf !== 'none'){
      this.props.updateBookList(book, targetShelf)
    }
    else{
      this.props.addToBookList(book,targetShelf)
    }
  }

  render(){
    const { book, title, thumbnail, authors, shelf } = this.props

    return(
      <div className="book">
        <div className="book-top" >
          <img src={`${thumbnail}`} className="book-cover" alt={`Thumbnail of the book: ${title}`}></img>
          <div className="book-shelf-changer">
            <select onChange={(event) => this.handleChange(event,book,shelf)} defaultValue={shelf ? shelf : 'none' }>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors}</div>
      </div>
    )
  }
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
}

export default Book