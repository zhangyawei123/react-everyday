import React from 'react'
import {Link} from 'react-router-dom'

export default class Book extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/book/javabook">javabook</Link></li>
          <li><Link to="/book/webbook">webbook</Link></li>
        </ul>
        book: <br/>
        {this.props.children}
      </div>
    )
  }
}