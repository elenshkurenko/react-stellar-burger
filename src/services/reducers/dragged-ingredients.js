import update from 'immutability-helper'
import { SET_DRAGGED_INGREDIENTS, REMOVE_DRAGGED_INGREDIENTS, MOVE_DRAGGED_INGREDIENTS } from '../actions/dragged-ingredients';

const initialState = {
  bun: null,
  ingredients: []
}

export const draggetIngredientsReducer = (state = initialState, action) => {
  switch(action.type){
    case SET_DRAGGED_INGREDIENTS: {
      if (action.data.type === 'bun') {
        return {
          ...state,
          bun: action.data
        }
      } else {
        return {
          ...state,
          ingredients: [...state.ingredients, action.data]
        }
      }
    }
    case REMOVE_DRAGGED_INGREDIENTS: {
      return {
        ...state,
        ingredients: state.ingredients.filter((item) => action.uuid !== item.uuid)
      }
    }
    case MOVE_DRAGGED_INGREDIENTS: {
      return update(state, {
        ingredients: {
          $splice: [
            [action.dragIndex, 1],
            [action.hoverIndex, 0, state.ingredients[action.dragIndex]],
          ],
        }
      })
    }
    default:
      return state;
  }
}