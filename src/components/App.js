// react
import React, { Component } from 'react'

// styles
import './App.css'

// components
import AuthorsList from './AuthorsList/AuthorsList'

class App extends Component {
  render() {
    return (
      <div className='app'>
        <AuthorsList />
      </div>
    )
  }
}

export default App
