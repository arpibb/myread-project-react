import React, {Component} from 'react'
import './App.css'

class Book extends Component {
  render(){
    const { title, thumbnail, authors } = this.props
    return(
      <div className="book">
        <div className="book-top" >
          <img src={`${thumbnail}`} className="book-cover" alt="Thumbnail of the book: {`${title}`}"></img>
          <div className="book-shelf-changer">
            <select>
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

export default Book