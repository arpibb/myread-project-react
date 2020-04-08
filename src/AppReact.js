import React from 'react'
import { Route } from 'react-router-dom'
import ListMyBooks from './ListMyBooks'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksAppReact extends React.Component {
  state = {
    books: []
  }

  componentDidMount(){
    BooksAPI.getAll()
      .then((books) => {
        this.setState(()=>({
          books: [...books]
        }))
      })
  }

  render(){
    return(
      <div>
        <Route exact path='/' render={() => (
          <ListMyBooks
            books={this.state.books}
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