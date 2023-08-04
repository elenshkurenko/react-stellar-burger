import styles from './ingredient-details.module.css';
import { ingredientType } from '../../../utils/types';


function IngredientDetails ({ingredient}) {
  return(
    <div className={styles.content +' pt-10 pr-10 pb-15 pl-10'}>
      <h1 className='text text_type_main-large pt-3'>Детали ингредиента</h1>
      <div className={styles.wrap}>
        <img src={ingredient.image} alt={ingredient.name} className={styles.image + ' mb-4'}/>
        <p className='text text_type_main-medium mb-8'>{ingredient.name}</p>
        <div className={styles.components}>
          <div className={styles.component}>
            <p className='text text_type_main-default text_color_inactive'>Калории,ккал</p>
            <p className='text text_type_digits-default text_color_inactive'>{ingredient.calories}</p>
          </div>
          <div className={styles.component}>
            <p className='text text_type_main-default text_color_inactive'>Белки, г</p>
            <p className='text text_type_digits-default text_color_inactive'>{ingredient.proteins}</p>
          </div>
          <div className={styles.component}>
            <p className='text text_type_main-default text_color_inactive'>Жиры, г</p>
            <p className='text text_type_digits-default text_color_inactive'>{ingredient.fat}</p>
          </div>
          <div className={styles.component}>
            <p className='text text_type_main-default text_color_inactive'>Углеводы, г</p>
            <p className='text text_type_digits-default text_color_inactive'>{ingredient.carbohydrates}</p>
          </div>
        </div>
      </div>
    </div>

  )
}

IngredientDetails.propTypes = {
  ingredient: ingredientType
};

export default IngredientDetails;