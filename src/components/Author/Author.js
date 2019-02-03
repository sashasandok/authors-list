// react
import React from 'react'

// actions
import { PAGE_COUNT } from '../../actions/authors'

// styles
import './Author.css'

const Author = ({ item, index, page, first }) => {
  return (
    <div className='author-item'>
      <div className='author-info'>
        <p className='author-index'>{(page - 1) * PAGE_COUNT + index + 1}</p>
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
