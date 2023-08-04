import IngredientsGroup from './ingredients-group/ingredients-group';
import Tabs from './tabs/tabs';
import styles from './burger-ingredients.module.css';
import Modal from '../modal/modal';
import IngredientDetails from '../modal/ingredient-details/ingredient-details';
import {useRef} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { closeIngredient } from '../../services/actions/ingredient';
import { setActiveTab } from '../../services/actions/tabs';

function BurgerIngredients() {
  const position = useRef({})
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

  const ingredient = useSelector(store => store.ingredient);
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(closeIngredient())
  }

  const onScroll = (event) => {
    const scrollTop = event.target.scrollTop;
    const currentTab = [...category].reverse().find(item => {
      const offsetTop = position.current[item.type]
      return offsetTop <= scrollTop
    })
    dispatch(setActiveTab(currentTab.type))
  }

  return(
    <>
      <section className={styles.block + ' pt-10'}>
        <h1 className='text text_type_main-large'>Соберите бургер</h1>
        <Tabs />
        <div className={styles.wrap + ' custom-scroll'} onScroll={onScroll}>
          {
            category.map(item => (
              <div key={item.type} ref={(ref) => {
                if (!ref) return
                position.current[item.type] = ref.offsetTop
              }}>
                <IngredientsGroup item={item} />
              </div>
            ))
          }
        </div>
      </section>
      {ingredient && <>
        <Modal  onClose={closeModal}>
          <IngredientDetails ingredient={ingredient} />
        </Modal>
        </>}
    </>
  )
}

export default BurgerIngredients;