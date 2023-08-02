import { PropTypes } from 'prop-types';
import styles from './ingredient.module.css';
import {CurrencyIcon, Counter} from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { SET_OPEN_INGREDIENT } from '../../../services/actions/ingredient';
import { useDrag } from "react-dnd";

function Ingredient({ingredient}){
  const count = useSelector(store => store.draggetIngredients.filter(item => item._id === ingredient._id).length)
  const dispatch = useDispatch();
  const [, dragRef] = useDrag({
    type: 'ingredient',
    item: ingredient,
  });
  
  const onOpen = () => {
    dispatch({
      type: SET_OPEN_INGREDIENT,
      ingredient: ingredient
    })
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
  ingredients: PropTypes.arrayOf(PropTypes.shape({
    calories: PropTypes.number,
    carbohydrates: PropTypes.number,
    fat: PropTypes.number,
    image: PropTypes.string,
    image_large: PropTypes.string,
    image_mobile: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    proteins: PropTypes.number,
    type: PropTypes.string,
    __v: PropTypes.number,
    _id: PropTypes.string
  }))
};

export default Ingredient;