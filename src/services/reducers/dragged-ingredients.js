import update from 'immutability-helper'
import { SET_DRAGGED_INGREDIENTS, REMOVE_DRAGGED_INGREDIENTS, MOVE_DRAGGED_INGREDIENTS } from '../actions/dragged-ingredients';

const initialState = []

export const draggetIngredientsReducer = (state = initialState, action) => {
  switch(action.type){
    case SET_DRAGGED_INGREDIENTS: {
      if (action.data.type === 'bun') {
        return [
          ...state.filter(item => item.type !== 'bun'),
          action.data,
          action.data
        ]
      } else {
        return [...state, action.data]
      }
    }
    case REMOVE_DRAGGED_INGREDIENTS: {
      return state.filter((item) => action.uuid !== item.uuid)
    }
    case MOVE_DRAGGED_INGREDIENTS: {
      return update(state, {
        $splice: [
          [action.dragIndex, 1],
          [action.hoverIndex, 0, state[action.dragIndex]],
        ],
      })
    }
    default:
      return state;
  }
}