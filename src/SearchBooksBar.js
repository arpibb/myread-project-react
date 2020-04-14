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
        {/*
          NOTES: The search from BooksAPI is limited to a particular set of search terms.
          You can find these search terms here:
          https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

          However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
          you don't find a specific author or title. Every search is limited by search terms.
        */}
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
