// react
import React, { Component } from 'react'

// react-redux
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// actions
import { getAuthors } from '../../actions/authors'

// components
import Authors from '../Authors/Authors'

// styles
import './AuthorsList.css'

class AuthorsList extends Component {
  componentDidMount = () => {
    this.props.getAuthors()
  }

  render() {
    const { authors } = this.props
    return (
      <div className='authors-list'>
        <Authors authors={authors} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    authors: state.authors.items,
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getAuthors,
    },
    dispatch,
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthorsList)
