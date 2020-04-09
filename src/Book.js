import React, {Component} from 'react'
import './App.css'

class Book extends Component {
  render(){
    const { title, thumbnail } = this.props
    return(
      <div>
        {title}
        <img src= {thumbnail} alt={`Thumbnail of ${title}`}/>
      </div>
    )
  }
}

export default Book