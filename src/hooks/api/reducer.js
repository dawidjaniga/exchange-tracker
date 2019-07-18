import { createReducer } from 'redux-create-reducer'
import {
  FETCH_INIT,
  FETCH_SUCCESS,
  FETCH_FAILURE
} from '../../constants/actionTypes'

export default createReducer(
  {},
  {
    [FETCH_INIT] (state, action) {
      return {
        ...state,
        isLoading: true,
        error: ''
      }
    },
    [FETCH_SUCCESS] (state, action) {
      return {
        ...state,
        isLoading: false,
        error: '',
        data: action.data
      }
    },
    [FETCH_FAILURE] (state, action) {
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    }
  }
)
