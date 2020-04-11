import React from 'react'
import { Route } from 'react-router-dom'
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

    }
  }

  componentDidMount(){
    BooksAPI.getAll()
      .then((books) => {
        this.setState(()=>({
          books: [...books]
        }))
      })
  }

  updateBookList = (book, shelf) => {
    const bookIdx = this.state.books.findIndex(b => book.id === b.id )
    let copyBooks = [...this.state.books]
    copyBooks[bookIdx] = {...copyBooks[bookIdx], shelf: shelf}
    this.setState(()=>({
      books: copyBooks
    }))
    BooksAPI.update(book,shelf).then((res) => console.log(res))
  }

  render(){
    return(
      <div>
        <Route exact path='/' render={() => (
          <ListMyBooks
            books= {this.state.books}
            updateBookList = {this.updateBookList}
            shelves = {this.state.shelves}
          />
        )} />
        <Route path='/search' render={({ history }) => (
          <SearchBooks/>
        )} />
      </div>
    )
  }

}
export default BooksAppReact