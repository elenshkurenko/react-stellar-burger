import IngridientsGroup from './ingridients-group/ingridients-group';
import Tabs from './tabs/tabs';
import styles from './burger-ingredients.module.css';

function BurgerIngredients({ingridients}) {
  const category =[
    {
      name: 'Булки',
      type: 'bun'
    },
    {
      name: 'Соусы',
      type: 'sauce'
    },
    {
      name: 'Начинки',
      type: 'main'
    }
  ]
  return(
    <section className={styles.block + ' pt-10'}>
      <h1 className='text text_type_main-large'>Соберите бургер</h1>
      <Tabs />
      <div className={styles.wrap + ' custom-scroll'}>
        {
          category.map(item => (
            <IngridientsGroup key={item.type} item={item} ingridients={ingridients}/>
          ))
        }
      </div>
      
    </section>
  )
}

export default BurgerIngredients;