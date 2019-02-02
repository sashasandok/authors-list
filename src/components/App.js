// react
import React, { Component } from 'react'

// react-redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// actions
import { getAuthors, filterAuthors } from '../actions/authors'

// styles
import './App.css'

// components
import AuthorsList from './AuthorsList/AuthorsList'
import AuthorsSearch from './AuthorsSearch/AuthorsSearch'

class App extends Component {
  componentDidMount = () => {
    this.props.getAuthors()
  }

  onInputChange = value => {
    this.props.filterAuthors(value)
  }

  render() {
    return (
      <div className='app'>
        <AuthorsSearch onInputChange={this.onInputChange} />
        <AuthorsList
          authors={this.props.authors}
          result={this.props.searchResult}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    authors: state.authors.items,
    searchResult: state.authors.result,
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getAuthors,
      filterAuthors,
    },
    dispatch,
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
