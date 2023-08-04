import { SET_OPEN_INGREDIENT, SET_CLOSE_INGREDIENT } from '../actions/ingredient';

const initialState = null;

export const ingredientReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_OPEN_INGREDIENT : {
      return action.ingredient;
    }
    case SET_CLOSE_INGREDIENT: {
      return null
    }
    default: 
      return state;
  }
}