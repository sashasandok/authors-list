// react
import React, { Component } from 'react'

// styles
import './App.css'

// components
import AuthorsList from './AuthorsList/AuthorsList'
import AuthorsSearch from './AuthorsSearch/AuthorsSearch'

class App extends Component {
  render() {
    return (
      <div className='app'>
        <AuthorsSearch />
        <AuthorsList />
      </div>
    )
  }
}

export default App
