import React from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import ListMyBooks from './ListMyBooks'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'


class BooksAppReact extends React.Component {
  state ={
    books : [],
    shelves: {
      currentlyReading: 'Currently Reading',
      wantToRead: 'Want To Read',
      read: 'Read',
    },
    queryResults: [],
    booksIDs : []
  }

  componentDidMount(){
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

  addToBookList = (bookID,shelf) =>{
    // debugger
    BooksAPI.get(bookID).then((book)=>{
      book.shelf = shelf
      const copyBooksIDs = {...this.state.booksIDs}
      console.log(copyBooksIDs)
      copyBooksIDs[bookID] = Object.keys(copyBooksIDs).length
      this.setState((prevState)=>({
        books: [...prevState.books,book],
        booksIDs: copyBooksIDs
      }))
      return book
    }).then((book) => {
      BooksAPI.update(book,shelf)
    })
  }

  updateBookList = (book, shelf) => {
    const bookIdx = this.state.books.findIndex(b => book.id === b.id )
    let copyBooks = [...this.state.books]
    copyBooks[bookIdx] = {...copyBooks[bookIdx], shelf: shelf}
    this.setState(()=>({
      books: copyBooks
    }))
    BooksAPI.update(book,shelf)//.then((res) => console.log(res))
  }

  removeFromMyBooks = (book) => {
    const bookIdx = this.state.books.findIndex(b => book.id === b.id )
    let copyOfBooks = [...this.state.books]
    copyOfBooks.splice(1,bookIdx)
    this.setState(()=>({
      books: copyOfBooks
    }))
    
  }

  searchAPIForBooks = (query) => {
    if(query !== ''){
      BooksAPI.search(query).then((queryResults) =>{
        //console.log(queryResults)
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
    else {
      this.emptySearchResults()
    }
    
  }

  getBooksIDs = (booksOnShelves) => {
    let booksIDs = {}
    for(let i= 0; i < booksOnShelves.length; i++){
      booksIDs[booksOnShelves[i].id] = i
      //booksIDs.push(booksOnShelves[i].id)
    }
    this.setState(()=>({
      booksIDs: booksIDs 
    }))
    console.log(this.state.booksIDs)
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
            shelves = {this.state.shelves}
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