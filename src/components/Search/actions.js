import * as types from './actionTypes'
import { searchService } from './service'

const request = (data, type) => ({ type, data })
const success = (data, type) => ({ type, data })
const failure = (error, type) => ({ type, error })

const getSearchResults = (data) => {
  return (dispatch) => {
    dispatch(request(null, types.GET_SEARCH_RESULTS_REQUEST))
    console.log({ searchService })
    searchService.getSearchResults(data).then(
      (res) => {
        dispatch(success(res, types.GET_SEARCH_RESULTS_SUCCESS))
      },
      (error) => {
        dispatch(failure(error, types.GET_SEARCH_RESULTS_FAILED))
      }
    )
  }
}

export const searchActions = {
  getSearchResults,
}
