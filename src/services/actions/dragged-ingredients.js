export const SET_DRAGGED_INGREDIENTS = 'SET_DRAGGED_INGREDIENTS';
export const REMOVE_DRAGGED_INGREDIENTS = 'REMOVE_DRAGGED_INGREDIENTS';
export const MOVE_DRAGGED_INGREDIENTS = 'MOVE_DRAGGED_INGREDIENTS';

export const draggetIngredients = (data) => (dispatch) => {
  dispatch({
    type: SET_DRAGGED_INGREDIENTS,
    data
  })
}

export const removeIngredient = (uuid) => (dispatch) => {
  dispatch({
    type: REMOVE_DRAGGED_INGREDIENTS,
    uuid
  })
}

export const moveDraggedIngredient = ({dragIndex, hoverIndex}) => (dispatch) => {
  dispatch({
    type: MOVE_DRAGGED_INGREDIENTS,
    dragIndex,
    hoverIndex
  })
}