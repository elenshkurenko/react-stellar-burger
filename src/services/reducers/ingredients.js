import {SET_DATA_INGREDIENTS, SET_LOADING_INGREDIENTS} from '../actions/ingredients';

const initialState = {
  loading: true,
  data: null
}

export const ingredientsReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_LOADING_INGREDIENTS:{
      return {
        ...state,
        loading: action.loading
      }
    }
    case SET_DATA_INGREDIENTS:{
      return {
        ...state,
        data: action.data
      }
    }
    default:
      return state;
  }
} 