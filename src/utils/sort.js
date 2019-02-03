export const sortBy = (data, sortName) => {
  if (sortName === 'name') {
    return data.sort((a, b) => {
      if (a.name > b.name) {
        return -1
      }
      if (a.name < b.name) {
        return 1
      }
      return 0
    })
  }

  if (sortName === 'pageviews') {
    return data.sort((a, b) => {
      if (a.pageviews > b.pageviews) {
        return -1
      }
      if (a.pageviews < b.pageviews) {
        return 1
      }
      return 0
    })
  }
}
