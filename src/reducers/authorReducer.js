// Redux
import { handleActions } from 'redux-actions'

// Actions
import actions from '../actions/authorActions'

export const initialState = {
  isFetching: false,
  error: '',
  page: 1,
  items: {},
  result: '',
}

export default handleActions(
  {
    [actions.author.request]: state => ({
      ...state,
      isFetching: true,
      error: '',
    }),

    [actions.author.success]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      items: payload.items,
      [payload.page]: payload.items,
    }),

    [actions.author.error]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      error: payload.error,
    }),

    [actions.setPage]: (state, { payload }) => ({
      ...state,
      page: payload.page,
    }),

    [actions.author.filter.request]: state => ({
      ...state,
      isFetching: true,
      error: '',
    }),

    [actions.author.filter.success]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      result: payload.result,
    }),

    [actions.author.filter.error]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      error: payload.error,
    }),
  },
  initialState,
)
