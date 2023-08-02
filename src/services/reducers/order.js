import {SET_OPEN_ORDER_MODAL, SET_CLOSE_ORDER_MODAL} from '../actions/order';

const initialState = {
  modal: false,
  id: null
};

export const orderReducer = (state= initialState, action) => {
  switch(action.type) {
    case SET_OPEN_ORDER_MODAL : {
      return {...state, modal: true, id: action.id};
    }
    case SET_CLOSE_ORDER_MODAL: {
      return {...initialState}
    }
    default: 
      return state;
  }
}