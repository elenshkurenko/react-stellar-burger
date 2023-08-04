import {  useSelector } from 'react-redux';
import styles from './ingredients-group.module.css';
import Ingredient from '../ingredient/ingredient';
import { ingredientType } from '../../../utils/types';

function IngredientsGroup({item}) {
  const ingredients = useSelector(store => store.ingredients)
  const newIngredients = ingredients.data.filter(ingredient => ingredient.type === item.type);

  return(
    <section className='pr-4 pb-2 pl-4 mb-10'>
      <h2 className='text text_type_main-medium'>{item.name}</h2>
      <div className={styles.wrap}>
      {
        newIngredients.map(item => (
          <Ingredient key={item._id} ingredient={item} />
        ))
      }
      </div>
      
    </section>
  )
}

IngredientsGroup.propTypes = {
  item: ingredientType
};

export default IngredientsGroup;