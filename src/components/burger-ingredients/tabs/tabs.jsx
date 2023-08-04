import styles from './tabs.module.css';
import { useSelector } from 'react-redux';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';

function Tabs(){
  const tab = useSelector(store => store.tabs)
  return (
    <nav className={styles.nav +' mt-5 mb-10'}>
      <Tab value="Булки" active={tab === 'bun'}>
        Булки
      </Tab>
      <Tab value="Соусы" active={tab === 'sauce'}>
        Соусы
      </Tab>
      <Tab value="Начинки" active={tab === 'main'}>
        Начинки
      </Tab>
    </nav>
  )
}

export default Tabs;