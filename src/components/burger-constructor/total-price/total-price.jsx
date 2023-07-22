import styles from './total-price.module.css';
import {CurrencyIcon, Button} from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../../modal-overlay/modal-overlay';
import Modal from '../../modal/modal';
import OrderDetailes from '../../modal/order-details/order-details';
import { useState } from 'react';

function TotalPrice() {
  const [openModal, setOpenModal] = useState(false);
  const closeModal = () => setOpenModal(false)
  return(
    <>
      <div className={styles.wrap + ' pt-10 pr-4'}>
        <div className={styles.price}>
          <p className='text text_type_digits-medium'>610</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button htmlType="button" type="primary" size="large" extraClass='ml-10' onClick={() => setOpenModal(true)}>
          Оформить заказ
        </Button>
      </div>
      {openModal && <>
        <ModalOverlay onClose={closeModal} />
        <Modal  onClose={closeModal}>
          <OrderDetailes />
        </Modal>
      </>}
    </>
  )
}


export default TotalPrice;