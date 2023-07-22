import styles from './tabs.module.css';
import React from 'react';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';

function Tabs(){
  const [current, setCurrent] = React.useState('one')
  return (
    <nav className={styles.nav +' mt-5 mb-10'}>
      <Tab value="Булки" active={current === 'one'} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="Соусы" active={current === 'two'} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="Начинки" active={current === 'three'} onClick={setCurrent}>
        Начинки
      </Tab>
    </nav>
  )
}

export default Tabs;