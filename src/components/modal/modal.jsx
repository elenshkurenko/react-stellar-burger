import styles from './modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import {createPortal} from 'react-dom';
import { useEffect } from 'react';

function Modal(props){
  useEffect(() => {
    const callback = e => {
      if(e.code === "Escape"){
        props.onClose()
      }
    }
    document.addEventListener('keydown', callback);
    return () => {
      document.removeEventListener('keydown', callback)
    }
  }, [])

  return createPortal(
    <div className={styles.modal}>
      <button type='button' className={styles.close} onClick={props.onClose}>
        <CloseIcon type="primary" />
      </button>
      {props.children}
    </div>,
    document.getElementById('modal')
  )
}

export default Modal;