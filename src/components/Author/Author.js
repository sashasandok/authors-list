// react
import React from 'react'

// styles
import './Author.css'

const Author = ({ item, index, first }) => {
  return (
    <div className='author-item'>
      <div className='author-info'>
        <p className='author-index'>{index + 1}</p>
        <p className='first-letter'>{first}</p>
        <div className='author-name'>
          <p>{item.name}</p>
          <span>{item.count_pub} публ.</span>
        </div>
      </div>
      <div className='author-pageviews'>
        <p>{item.pageviews}</p>
      </div>
    </div>
  )
}

export default Author
