import styles from './total-price.module.css';
import {CurrencyIcon, Button} from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../../modal/modal';
import OrderDetailes from '../../modal/order-details/order-details';
import { SET_OPEN_ORDER_MODAL, SET_CLOSE_ORDER_MODAL } from '../../../services/actions/order';
import { useDispatch, useSelector } from 'react-redux';

function TotalPrice() {
  const dispatch = useDispatch();
  const ingredients = useSelector(store => store.draggetIngredients.map(item => item._id))
  const order = useSelector(store => store.order)
  const prices = useSelector(store => store.draggetIngredients.map(item => item.price))


  const sum = prices.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
  }, 0);

  const onOpen = () => {
    const api = 'https://norma.nomoreparties.space/api/orders'
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
    .then(res => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    })
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

  const onClose = () => {
    dispatch({
      type: SET_CLOSE_ORDER_MODAL
    })
  }

  return(
    <>
      <div className={styles.wrap + ' pt-10 pr-4'}>
        <div className={styles.price}>
          <p className='text text_type_digits-medium'>{sum}</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button /*disabled={true}*/ htmlType="button" type="primary" size="large" extraClass='ml-10'  onClick={onOpen}>
          Оформить заказ
        </Button>
      </div>
      {order.modal && <>
        <Modal onClose={onClose}>
          <OrderDetailes />
        </Modal>
      </>}
    </>
  )
}


export default TotalPrice;