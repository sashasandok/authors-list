// react
import React from 'react'

// components
import Authors from '../Authors/Authors'

// styles
import './AuthorsList.css'

const AuthorsList = props => {
  return (
    <div className='authors-list'>
      <Authors
        authors={props.authors}
        result={props.result}
        page={props.page}
      />
    </div>
  )
}

export default AuthorsList
