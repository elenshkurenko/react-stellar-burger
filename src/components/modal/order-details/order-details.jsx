import styles from './order-details.module.css';
import { CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function OrderDetailes() {
  return(
    <div className={styles.content + ' mt-30 mb-30'}>
      <h1 className='text text_type_digits-large mb-8'>034536</h1>
      <p className="text text_type_main-medium mb-15">идентификатор заказа</p>
      <div className={styles.image + ' mb-15'}>
        <CheckMarkIcon type="primary"/>
      </div>
      <p className='text text_type_main-default mb-2'>Ваш заказ начали готовить</p>
      <p className='text text_type_main-default text_color_inactive'>Дождитесь готовности на орбитальной станции</p>
    </div>
  )
}

export default OrderDetailes;