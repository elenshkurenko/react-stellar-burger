import {Logo, BurgerIcon, ListIcon, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './app-header.module.css';

function AppHeader() {
  return(
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.wrap}>
          <a href="#" className={styles.link + ' p-5 mt-4 mb-4'}>
            <BurgerIcon type="primary" />
            <p className={styles.link__text_white + ' text text_type_main-default ml-2'}>Конструктор</p>
          </a>
          <a href="#" className={styles.link + ' p-5 ml-2 mt-4 mb-4'}>
            <ListIcon type="secondary" />
            <p className=' text text_type_main-default text_color_inactive ml-2'>Лента заказов</p>
          </a>
        </div>
        <a href="#" className={styles.logo}>
          <Logo />
        </a>
        <a href="#" className={styles.link + ' p-5 mt-4 mb-4'}>
          <ProfileIcon type="secondary" />
          <p className=' text text_type_main-default text_color_inactive ml-2'>Личный кабинет</p>
        </a>
      </div>
    </header>
  )
}

export default AppHeader;