export const SET_OPEN_INGREDIENT = 'SET_OPEN_INGREDIENT';
export const SET_CLOSE_INGREDIENT = 'SET_CLOSE_INGREDIENT';

export const openIngredient = (ingredient) => (dispatch) => {
  dispatch({
    type: SET_OPEN_INGREDIENT,
    ingredient
  })
}

export const closeIngredient = () => (dispatch) => {
  dispatch({
    type: SET_CLOSE_INGREDIENT
  })
}