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
  author: {
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
  dispatch(actions.author.request())

  const sorted = data.sort((a, b) => {
    if (a.pageviews > b.pageviews) {
      return -1
    }
    if (a.pageviews < b.pageviews) {
      return 1
    }
    return 0
  })

  const items = sorted.map(authorMapper)
  const pages = divideToPages(items, PAGE_COUNT)

  try {
    dispatch(
      actions.author.success({
        pagination: data.pagination,
        items: pages,
      }),
    )
  } catch (e) {
    dispatch(actions.author.error({ error: e }))
    console.log(e)
  }
}

export const filterAuthors = value => async dispatch => {
  dispatch(
    actions.author.filter.success({
      result: value,
    }),
  )
}

export const setPage = ({ page }) => async dispatch => {
  dispatch(actions.setPage({ page }))
}
