import React from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import ListMyBooks from './ListMyBooks'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

const shelves = {
  currentlyReading: 'currently reading',
  wantToRead: 'want to read',
  read: 'read',
}

class BooksAppReact extends React.Component {
  state = {
    books : [],
    queryResults: [],
    booksIDs : {},
  }

  componentDidMount(){
    this.initializeStates()
  }

  initializeStates(){
    BooksAPI.getAll()
      .then((books) => {
        this.setState(()=>({
          books: [...books]
        }))
        return books
      }).then ((books) => {
        this.getBooksIDs(books)
      })
  }

  addToBookList = (book,shelf) =>{
    book.shelf = shelf
    const copyBooksIDs = {...this.state.booksIDs}
    copyBooksIDs[book.id] = Object.keys(copyBooksIDs).length
    this.setState((prevState)=>({
      books: [...prevState.books,book],
      booksIDs: copyBooksIDs
    })) 
    BooksAPI.update(book,shelf)
  }

  updateBookList = (book, shelf) => {
    const bookIdx = this.state.books.findIndex(b => book.id === b.id )
    let copyBooks = [...this.state.books]
    copyBooks[bookIdx] = {...copyBooks[bookIdx], shelf: shelf}
    this.setState(()=>({
      books: copyBooks
    }))
    BooksAPI.update(book,shelf)
  }

  removeFromMyBooks = (book) => {
    const bookIdx = this.state.books.findIndex(b => book.id === b.id )
    let copyOfBooks = [...this.state.books]
    copyOfBooks.splice(1,bookIdx)
    this.setState(()=>({
      books: copyOfBooks
    }))
    BooksAPI.update(book,'none')
  }

  searchAPIForBooks = (query) => {
    if(query.trim() !== ''){
      BooksAPI.search(query.trim()).then((queryResults) =>{
        console.log(queryResults)
        if(!queryResults || queryResults.error){
          this.emptySearchResults()
        }
        else{
          this.setState(()=>({
            queryResults,
          }))
        }
      })
    }
  }

  getBooksIDs = (booksOnShelves) => {
    let booksIDs = {}
    for(let i= 0; i < booksOnShelves.length; i++){
      booksIDs[booksOnShelves[i].id] = i
    }
    this.setState(()=>({
      booksIDs: booksIDs 
    }))
  }

  emptySearchResults = () =>{
    this.setState(()=>({
      queryResults: [],
    }))
  }

  render(){
    return(
      <div>
        <Route exact path='/' render={() => (
          <ListMyBooks
            books= {this.state.books}
            updateBookList = {this.updateBookList}
            shelves = {shelves}
            emptyResults = {this.emptySearchResults}
            removeFromMyBooks = {this.removeFromMyBooks}
          />
        )} />
        <Route path='/search' render={() => (
          <SearchBooks
            books = {this.state.books}
            updateBookList = {this.updateBookList}
            searchBookList = {this.searchAPIForBooks}
            queryResults = {this.state.queryResults}
            booksIDs = {this.state.booksIDs}
            emptyResults = {this.emptySearchResults}
            addToBookList = {this.addToBookList}
            removeFromMyBooks = {this.removeFromMyBooks}
          />
        )} />
        <div className="open-search">
          <Link to='/search'><button></button></Link>
        </div>
      </div>
    )
  }
}

export default BooksAppReact