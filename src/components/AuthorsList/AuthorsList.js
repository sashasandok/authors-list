// react
import React, { Component } from 'react'

// components
import Authors from '../Authors/Authors'

// styles
import './AuthorsList.css'

class AuthorsList extends Component {
  render() {
    const { authors } = this.props
    return (
      <div className='authors-list'>
        <Authors
          authors={authors}
          onInputChange={this.onInputChange}
          result={this.props.result}
        />
      </div>
    )
  }
}

export default AuthorsList
