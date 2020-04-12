import React from 'react'
import { Route } from 'react-router-dom'
import ListMyBooks from './ListMyBooks'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Link } from 'react-router-dom'

class BooksAppReact extends React.Component {
  state ={
    books : [],
    shelves: {
      currentlyReading: 'Currently Reading',
      wantToRead: 'Want To Read',
      read: 'Read',
    },
    queryResults: [],
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
    BooksAPI.update(book,shelf)//.then((res) => console.log(res))
  }

  searchAPIForBooks = (query) => {
    console.log(query)
    BooksAPI.search(query).then((queryResults) =>{
      console.log(queryResults)
      if(!queryResults || queryResults.error){
        this.setState(()=>({
          queryResults: []
        }))
      }
      else{
        this.setState(()=>({
          queryResults: queryResults
        }))
      }
      // }catch(error){
      //   console.error(error)
      //   
      // }
      })
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
          <SearchBooks
            books = {this.state.books}
            updateBookList = {this.updateBookList}
            searchBookList = {this.searchAPIForBooks}
            queryResults = {this.state.queryResults}
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