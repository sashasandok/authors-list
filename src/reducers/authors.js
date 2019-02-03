// Redux
import { handleActions } from 'redux-actions'

// Actions
import actions from '../actions/authors'

export const initialState = {
  isFetching: false,
  error: '',
  page: 1,
  items: {},
  result: '',
}

export default handleActions(
  {
    [actions.authors.request]: state => ({
      ...state,
      isFetching: true,
      error: '',
    }),

    [actions.authors.success]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      items: payload.items,
      [payload.page]: payload.items,
    }),

    [actions.authors.error]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      error: payload.error,
    }),

    [actions.setPage]: (state, { payload }) => ({
      ...state,
      page: payload.page,
    }),

    [actions.authors.filter.request]: state => ({
      ...state,
      isFetching: true,
      error: '',
    }),

    [actions.authors.filter.success]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      result: payload.result,
    }),

    [actions.authors.filter.error]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      error: payload.error,
    }),
  },
  initialState,
)
