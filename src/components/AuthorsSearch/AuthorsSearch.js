// react
import React, { Component } from 'react'

// styles
import './AuthorsSearch.css'

import { Input } from 'semantic-ui-react'

class AuthorsSearch extends Component {
  render() {
    return (
      <div className='search-input'>
        <Input
          icon='search'
          iconPosition='left'
          placeholder='Search...'
          fluid
        />
      </div>
    )
  }
}

export default AuthorsSearch
