import * as types from './actionTypes'

const initialState = {
  results: {},
  loading: false,
  errors: undefined,
}

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_SEARCH_RESULTS_REQUEST:
      return {
        ...state,
        loading: true,
      }

    case types.GET_SEARCH_RESULTS_SUCCESS:
      return {
        ...state,
        results: action.data,
        loading: false,
      }

    case types.GET_SEARCH_RESULTS_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.data,
      }

    default:
      return state
  }
}

export default searchReducer
