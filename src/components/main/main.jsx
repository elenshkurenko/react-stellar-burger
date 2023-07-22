import styles from './main.module.css';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

function Main({ingridients}) {
  return(
    <main className={styles.main}>
      <BurgerIngredients ingridients={ingridients}/>
      <BurgerConstructor/>
    </main>
  )
}

export default Main;