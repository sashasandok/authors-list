// Libs
import { createSelector } from 'reselect'

export const getAuthors = ({ authors }) => authors.items || {}

export const getAuthorsList = createSelector(
  getAuthors,
  authors => authors.items,
)

export const getAuthorSearchResult = ({ authors }) => authors.result
export const authorSearchResult = value => {
  console.log('reselect search value', value)
  createSelector(
    getAuthorSearchResult,
    authors => authors.result + value,
  )
}
