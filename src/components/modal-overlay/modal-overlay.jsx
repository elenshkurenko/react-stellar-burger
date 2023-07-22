import styles from './modal-overlay.module.css';
import { createPortal } from 'react-dom';

function ModalOverlay(props){
  return createPortal(
    <div className={styles.overlay} onClick={props.onClose}></div>,
    document.getElementById('overlay')
  )
}

export default ModalOverlay;