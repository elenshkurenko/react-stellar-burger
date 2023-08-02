import PropTypes from 'prop-types'; 
import {  useSelector } from 'react-redux';
import styles from './ingredients-group.module.css';
import Ingredient from '../ingredient/ingredient';

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
  item: PropTypes.arrayOf(PropTypes.shape({
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
}

export default IngredientsGroup;