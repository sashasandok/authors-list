// react
import React, { Component } from 'react'

// react-redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// actions
import { getAuthors, filterAuthors, setPage } from '../actions/authors'

// styles
import './App.css'

// components
import AuthorsList from './AuthorsList/AuthorsList'
import AuthorsSearch from './AuthorsSearch/AuthorsSearch'

// semantic-ui
import { Pagination } from 'semantic-ui-react'

class App extends Component {
  componentDidMount = () => {
    this.props.getAuthors()
  }

  onInputChange = value => {
    this.props.filterAuthors(value)
  }

  onPaginationChange = ({ activePage }) => {
    this.props.setPage({ page: activePage })
  }

  render() {
    const { page, authors, searchResult } = this.props
    return (
      <div className='app'>
        <AuthorsSearch onInputChange={this.onInputChange} />
        <AuthorsList authors={authors} result={searchResult} page={page} />
        <Pagination
          activePage={page}
          onPageChange={this.onPaginationChange}
          totalPages={5}
        />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    authors: state.authors.items[state.authors.page] || [],
    searchResult: state.authors.result,
    page: state.authors.page,
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getAuthors,
      filterAuthors,
      setPage,
    },
    dispatch,
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
