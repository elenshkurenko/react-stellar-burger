import { useEffect} from 'react';
import styles from "./app.module.css";
import AppHeader from '../app-header/app-header';
import Main from '../main/main';
import Preloader from '../preloader/preloader';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredients } from '../../services/actions/ingredients';

function App() {
  const dispatch = useDispatch();
  const ingredients = useSelector(store => store.ingredients);

  useEffect(() => {
    dispatch(getIngredients())
  }, [dispatch])

  if (ingredients.loading) {
    return (
      <Preloader />
    )
  }

  return (
    <div className={styles.app}>
      <AppHeader></AppHeader>
      <Main ></Main>
    </div>
  );
}

export default App;
