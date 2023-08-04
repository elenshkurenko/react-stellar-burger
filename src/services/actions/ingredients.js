import { BASE_URL } from '../../utils/constants';
import { checkResponse } from '../../utils/check-redponse';

export const SET_LOADING_INGREDIENTS = 'SET_LOADING_INGREDIENTS';
export const SET_DATA_INGREDIENTS = 'SET_DATA_INGREDIENTS';

export const getIngredients = () => (dispatch) => {
  const api = BASE_URL + 'ingredients';

  fetch(api)
  .then(checkResponse)
  .then((res) => {
    dispatch({
      type: SET_DATA_INGREDIENTS,
      data: res.data
    })
    dispatch({
      type: SET_LOADING_INGREDIENTS,
      loading: false
    })
  })
  .catch((error) => {
    console.error(error);
  })
}