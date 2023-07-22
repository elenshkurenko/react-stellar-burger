import styles from './constructor-change-element.module.css';
import {ConstructorElement, DragIcon} from '@ya.praktikum/react-developer-burger-ui-components';

function ConstructorChangeElement(){
  return(
    <div className={styles.wrap}>
      <DragIcon type="primary"/>
      <ConstructorElement
        text="Краторная булка N-200i (верх)"
        price={50}
        // thumbnail={img}
        extraClass='ml-2'
      />
    </div>
  )
}

export default ConstructorChangeElement;