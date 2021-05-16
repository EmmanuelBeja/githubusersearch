import axios from 'axios'

const getSearchResults = ({ login, page, rowsPerPage }) =>
  axios
    .get(
      `https://api.github.com/search/users?q=${login} in:login&per_page=${rowsPerPage}&page=${page}`
    )
    .then((res) => res.data)

export const searchService = {
  getSearchResults,
}
