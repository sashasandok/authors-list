// react
import React from 'react'

// components
import Author from '../Author/Author'

const Authors = props => {
  return props.authors.map((item, index) => {
    return (
      <Author
        key={index}
        index={index}
        item={item}
        first={item.name.charAt(0)}
      />
    )
  })
}

export default Authors
