import styles from './ingridients-group.module.css';
import Ingridient from '../ingridient/ingridient';

function IngridientsGroup({item, ingridients}) {
  const newIngridients = ingridients.filter(ingridient => ingridient.type === item.type);

  return(
    <section className='pr-4 pb-2 pl-4 mb-10'>
      <h2 className='text text_type_main-medium'>{item.name}</h2>
      <div className={styles.wrap}>
      {
        newIngridients.map(item => (
          <Ingridient key={item._id} ingridient={item} />
        ))
      }
      </div>
      
    </section>
  )
}

export default IngridientsGroup;