// react
import React from 'react'

// styles

const Author = ({ item }) => {
  return (
    <div>
      <p>{item.count_pub}</p>
      <p>{item.name}</p>
      <p>{item.pageviews}</p>
    </div>
  )
}

export default Author
