import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './App.css'

class Book extends Component {

  handleChange = (event,book) => {
    console.log(book)
    this.props.updateBookList(book,event.target.value)
  }

  render(){
    const { book, title, thumbnail, authors, shelf } = this.props

    return(
      <div className="book">
        <div className="book-top" >
          <img src={`${thumbnail}`} className="book-cover" alt={`Thumbnail of the book: ${title}`}></img>
          <div className="book-shelf-changer">
            <select onChange={(event) => this.handleChange(event,book)} defaultValue={shelf}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="">None</option>
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
  thumbnail: PropTypes.string.isRequired,
  authors: PropTypes.array.isRequired,
  shelf: PropTypes.string.isRequired
}

export default Book