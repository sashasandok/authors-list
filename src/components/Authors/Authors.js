// react
import React from 'react'

// components
import Author from '../Author/Author'

// styles
import './Authors.css'

const Authors = props => {
  return props.result.match(/^[a-z0-9]+$/i) ? (
    <p className='no-match'>нет результатов удовлетворяющих поиску...</p>
  ) : (
    props.authors
      .filter(item => {
        const searchStr = `${item.name}`
        return searchStr.toLowerCase().includes(props.result)
      })
      .map((item, index) => {
        return (
          <Author
            key={index}
            index={index}
            item={item}
            page={props.page}
            first={item.name.charAt(0)}
          />
        )
      })
  )
}

export default Authors
