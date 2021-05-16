import * as types from '../actions/actionTypes'

const initialState = {
  login: '',
  results: [],
  totalCount: 0,
  loading: false,
  errors: undefined,
}

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_SEARCH_RESULTS_REQUEST:
      return {
        ...state,
        results: [],
        totalCount: 0,
        loading: true,
      }

    case types.GET_SEARCH_RESULTS_SUCCESS:
      return {
        ...state,
        login: action.data.login,
        results: action.data.items,
        totalCount: action.data.total_count,
        loading: false,
      }

    case types.GET_SEARCH_RESULTS_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.error,
      }

    default:
      return state
  }
}

export default searchReducer
