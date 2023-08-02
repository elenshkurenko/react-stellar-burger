import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './burger-constructor.module.css';
import TotalPrice from './total-price/total-price';
import { useDrop } from "react-dnd";
import { useSelector, useDispatch } from 'react-redux';
import { SET_DRAGGED_INGREDIENTS } from '../../services/actions/dragged-ingredients';
import {v4 as uuidv4} from 'uuid'
import ConstructorChangeElement from './constructor-change-element/constructor-change-element';


function BurgerConstructor() {
  const dispatch = useDispatch();
  const ingredients = useSelector(store => store.draggetIngredients.filter(item => item.type !== 'bun'));
  const bun = useSelector(store => store.draggetIngredients.find(item => item.type === 'bun'));
  const [, dropRef] = useDrop({
    accept: 'ingredient',
    drop(data) {
      dispatch({
        type: SET_DRAGGED_INGREDIENTS,
        data: {...data, uuid: uuidv4()}
      })
    }
  })


  return(
    <section className={styles.block + " pt-25 pb-10 pl-4  ml-10"} ref={dropRef}>
      <div className={styles.wrap}>
        {bun && 
          <ConstructorElement
            type="top"
            isLocked={true}
            text={bun.name}
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
            text={bun.name}
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