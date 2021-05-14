import axios from 'axios'

const getSearchResults = (login) => {
  return axios.get(`https://api.github.com/search/users?q=${login} in:login`).then((res) => {
    if (res.status === 200) {
      const { items } = res.data
      return items
    }
    const errorMessage = "Something went wrong. It's not you, It's us"
    return Promise.reject(errorMessage)
  })
}

export const searchService = {
  getSearchResults,
}
