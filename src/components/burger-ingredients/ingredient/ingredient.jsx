import styles from './ingredient.module.css';
import {CurrencyIcon, Counter} from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { openIngredient } from '../../../services/actions/ingredient';
import { useDrag } from "react-dnd";
import { ingredientType } from '../../../utils/types';

function Ingredient({ingredient}){
  const count = useSelector(store => {
    if (ingredient.type === 'bun') {
      if (store.draggetIngredients.bun && store.draggetIngredients.bun._id === ingredient._id) {
        return 2;
      } else {
        return 0;
      }
    } else {
      return store.draggetIngredients.ingredients.filter(item => item._id === ingredient._id).length
    }
  })
  const dispatch = useDispatch();
  const [, dragRef] = useDrag({
    type: 'ingredient',
    item: ingredient,
  });
  
  const onOpen = () => {
    dispatch(openIngredient(ingredient))
  }

  return(
    <>
      <div draggable ref={dragRef} className={styles.wrap} onClick={onOpen}>
        <img className='mb-1' src={ingredient.image} alt={ingredient.name} />
        <div className={styles.price +' mb-1'}>
          <span className='text text_type_digits-default'>{ingredient.price}</span>
          <CurrencyIcon type="primary" />
        </div>
        <p className='text text_type_main-small'>{ingredient.name}</p>
        {count > 0 && <Counter count={count} size="default" extraClass="m-1" />}
      </div>
    </>
  )
}

Ingredient.propTypes = {
  ingredient: ingredientType
};

export default Ingredient;