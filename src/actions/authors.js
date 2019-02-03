// babel
import 'babel-polyfill'

// redux
import { createActions } from 'redux-actions'

// mappers
import authorMapper from '../mappers/authorMapper'

// utils
import { divideToPages } from '../utils/paging'

// api
import data from '../data.json'

// constants
export const PAGE_COUNT = 7

const actions = createActions({
  authors: {
    request: x => x,
    success: x => x,
    error: x => x,
    filter: {
      success: x => x,
    },
  },
  setPage: x => x,
})

export default actions

export const getAuthors = () => async (dispatch, getState) => {
  dispatch(actions.authors.request())
  const items = data.map(authorMapper)
  const pages = divideToPages(items, PAGE_COUNT)
  console.log(pages)
  try {
    dispatch(
      actions.authors.success({
        pagination: data.pagination,
        items: pages,
      }),
    )
  } catch (e) {
    dispatch(actions.authors.error({ error: e }))
    console.log(e)
  }
}

export const filterAuthors = value => async dispatch => {
  dispatch(
    actions.authors.filter.success({
      result: value,
    }),
  )
}

export const setPage = ({ page }) => async dispatch => {
  dispatch(actions.setPage({ page }))
}
