// react
import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

// actions
import { PAGE_COUNT } from '../../actions/authorActions'

// styles
import './Author.css'

// logos
import logo1 from '../../assets/1st.svg'
import logo2 from '../../assets/2nd.svg'
import logo3 from '../../assets/3rd.svg'

const logos = [logo1, logo2, logo3]

const Author = ({ item, index, page, first }) => {
  return (
    <ReactCSSTransitionGroup
      transitionName='item'
      transitionEnterTimeout={500}
      transitionLeaveTimeout={300}
      transitionAppearTimeout={500}
      transitionAppear={true}
    >
      <div className='author-item'>
        <div className='author-info'>
          <p className='author-index'>{(page - 1) * PAGE_COUNT + index + 1}</p>
          <p className='first-letter'>{first}</p>
          <div className='author-name'>
            <p>{item.name}</p>
            <span>{item.count_pub} публ.</span>
          </div>
        </div>
        {(page - 1) * PAGE_COUNT + index + 1 <= 3
          ? logos.map((logo, i) => {
              return i === index ? (
                <img
                  key={i}
                  alt='logo'
                  src={logo}
                  style={{ width: '40px', height: '40px' }}
                />
              ) : null
            })
          : null}
        <div className='author-pageviews'>
          <p>{item.pageviews}</p>
        </div>
      </div>
    </ReactCSSTransitionGroup>
  )
}

export default Author
