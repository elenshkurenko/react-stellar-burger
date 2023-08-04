import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-constructor.module.css';
import TotalPrice from './total-price/total-price';
import { useDrop } from "react-dnd";
import { useSelector, useDispatch } from 'react-redux';
import { draggetIngredients } from '../../services/actions/dragged-ingredients';
import { v4 as uuidv4 } from 'uuid'
import ConstructorChangeElement from './constructor-change-element/constructor-change-element';


function BurgerConstructor() {
  const dispatch = useDispatch();
  const ingredients = useSelector(store => store.draggetIngredients.ingredients);
  const bun = useSelector(store => store.draggetIngredients.bun);
  const [, dropRef] = useDrop({
    accept: 'ingredient',
    drop(data) {
      dispatch(draggetIngredients({...data, uuid: uuidv4()}))
    }
  })


  return(
    <section className={styles.block + " pt-25 pb-10 pl-4  ml-10"} ref={dropRef}>
      <div className={styles.wrap}>
        {bun && 
          <ConstructorElement
            type="top"
            isLocked={true}
            text={bun.name + ' (верх)'}
            price={bun.price}
            thumbnail={bun.image}
            extraClass={'ml-8 ' + styles.elem}
          />
        }
        <div className={styles.list + ' custom-scroll'} ref={dropRef}>
          {ingredients.map((item, index) => (
            <ConstructorChangeElement key={item.uuid} index={index} ingredient={item} extraClass={styles.elem}/>
          ))}
        
        </div>
        
        {bun && 
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={bun.name + ' (низ)'}
            price={bun.price}
            thumbnail={bun.image}
            extraClass={'ml-8 ' + styles.elem}
          />
        }
        <TotalPrice />
      </div>

    </section>
  )
}

export default BurgerConstructor;