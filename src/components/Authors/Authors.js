// react
import React from 'react'

// styles
// import ''

// components
import Author from '../Author/Author'

const Authors = props => {
  return (
    <div>
      {props.authors.map((item, i) => {
        return <Author key={i++} item={item} />
      })}
    </div>
  )
}

export default Authors
