import {ConstructorElement} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-constructor.module.css';
import ConstructorChangeElement from './constructor-change-element/constructor-change-element';
import TotalPrice from './total-price/total-price'

function BurgerConstructor() {
  return(
    <section className={styles.block + " pt-25 pb-10 pl-4  ml-10"}>
      <div className={styles.wrap}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={200}
          // thumbnail={img}
          extraClass={'ml-8 ' + styles.elem}
        />
        <div className={styles.list + ' custom-scroll'}>
          <ConstructorChangeElement extraClass={styles.elem}/>
          <ConstructorChangeElement extraClass={styles.elem}/>
          <ConstructorChangeElement extraClass={styles.elem}/>
          <ConstructorChangeElement extraClass={styles.elem}/>
          <ConstructorChangeElement extraClass={styles.elem}/>
          <ConstructorChangeElement extraClass={styles.elem}/>
          <ConstructorChangeElement extraClass={styles.elem}/>
          <ConstructorChangeElement extraClass={styles.elem}/>
          <ConstructorChangeElement extraClass={styles.elem}/>
          <ConstructorChangeElement extraClass={styles.elem}/>
          <ConstructorChangeElement extraClass={styles.elem}/>
          <ConstructorChangeElement extraClass={styles.elem}/>
          
        </div>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text="Краторная булка N-200i (низ)"
          price={200}
          // thumbnail={img}
          extraClass={'ml-8 ' + styles.elem}
        />
        <TotalPrice />
      </div>

    </section>
  )
}

export default BurgerConstructor;