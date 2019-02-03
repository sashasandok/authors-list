// react
import React from 'react'

// styles
import './AuthorsSearch.css'

// semantic-ui
import { Input } from 'semantic-ui-react'

const AuthorsSearch = props => {
  return (
    <div className='search-input'>
      <Input
        icon='search'
        iconPosition='left'
        placeholder='Поиск авторов по имени'
        fluid
        onChange={evt => props.onInputChange(evt.target.value)}
        size='massive'
      />
    </div>
  )
}

export default AuthorsSearch
