import { useState } from 'react'
import styles from './ingridient.module.css';
import {CurrencyIcon, Counter} from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../../modal-overlay/modal-overlay';
import Modal from '../../modal/modal';
import IngridientDetails from '../../modal/ingredient-details/ingredient-details';

function Ingridient({ingridient}){
  const [openModal, setOpenModal] = useState(false);
  const closeModal = () => setOpenModal(false)
  return(
    <>
      <div className={styles.wrap} onClick={() => setOpenModal(true)}>
        <img className='mb-1' src={ingridient.image} alt={ingridient.name} />
        <div className={styles.price +' mb-1'}>
          <span className='text text_type_digits-default'>{ingridient.price}</span>
          <CurrencyIcon type="primary" />
        </div>
        <p className='text text_type_main-small'>{ingridient.name}</p>
        <Counter count={1} size="default" extraClass="m-1" />
      </div>
      {openModal && <>
      <ModalOverlay onClose={closeModal} />
      <Modal  onClose={closeModal}>
        <IngridientDetails ingridient={ingridient} />
      </Modal>
      </>}
    </>
  )
}

export default Ingridient;