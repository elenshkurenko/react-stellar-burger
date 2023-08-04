import styles from './total-price.module.css';
import {CurrencyIcon, Button} from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../../modal/modal';
import OrderDetailes from '../../modal/order-details/order-details';
import { createOrder, closeOrderModal } from '../../../services/actions/order';
import { useDispatch, useSelector } from 'react-redux';

function TotalPrice() {
  const dispatch = useDispatch();
  const bun = useSelector(store => store.draggetIngredients.bun)
  const ingredients = useSelector(store => store.draggetIngredients.ingredients.map(item => item._id))
  const order = useSelector(store => store.order)
  const bunPrice = useSelector(store => store.draggetIngredients.bun ? store.draggetIngredients.bun.price : 0)
  const ingredientsPrices = useSelector(store => store.draggetIngredients.ingredients.map(item => item.price))


  const sum = ingredientsPrices.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
  }, bunPrice * 2);

  const onOpen = () => {
    if (bun && ingredients.length > 0) {
      dispatch(createOrder([bun._id, bun._id, ...ingredients]))
    }
  }

  const onClose = () => {
    dispatch(closeOrderModal())
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