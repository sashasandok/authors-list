// babel
import 'babel-polyfill'

// redux
import { createActions } from 'redux-actions'

// mappers
// import mapper from '../mappers/movies'

// api
import data from '../data.json'

const actions = createActions({
  authors: {
    request: x => x,
    success: x => x,
    error: x => x,
    filter: {
      success: x => x,
    },
  },
})

export default actions

export const getAuthors = () => async (dispatch, getState) => {
  dispatch(actions.authors.request())

  try {
    dispatch(
      actions.authors.success({
        items: data,
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
