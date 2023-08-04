import { BASE_URL } from '../../utils/constants';
import { checkResponse } from '../../utils/check-redponse';


export const SET_OPEN_ORDER_MODAL = 'SET_OPEN_MODAL';
export const SET_CLOSE_ORDER_MODAL = 'SET_CLOSE_MODAL';

export const createOrder = (ingredients) => (dispatch) => {
  const api = BASE_URL +'orders'
    fetch(api, {
      method: 'POST',
      body: JSON.stringify({
        ingredients
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(checkResponse)
    .then((res) => {
      dispatch({
        type: SET_OPEN_ORDER_MODAL,
        id: res.order.number
      })
    })
    .catch((error) => {
      console.error(error);
    })
}

export const closeOrderModal = () => (dispatch) => {
  dispatch({
    type: SET_CLOSE_ORDER_MODAL
  })
}