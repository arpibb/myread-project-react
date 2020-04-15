import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './App.css'

class SearchBooksBar extends Component {
  state = {
    query: ''
  }

  handleChange = (e) =>{
    e.preventDefault()
    let query = e.target.value
    this.props.updateQuery(query)
    this.setState(()=>({
      query: query
    }))
    this.props.searchBookList(query)
  }

  render(){

    const { emptyResults } = this.props

    return(
      <div className="search-books-bar">
        <Link 
          to='/'><button 
          className="close-search"
          onClick = {emptyResults}
        >Close</button></Link>
        <div className="search-books-input-wrapper">
          <input 
            type="text"
            placeholder="Search by title or author"
            value = {this.state.query}
            onChange = {(e) => this.handleChange(e)}
          />
        </div>
      </div>
    )
  }
}

SearchBooksBar.propTypes ={
  emptyResults: PropTypes.func.isRequired
}

export default SearchBooksBar
