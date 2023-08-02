import { useEffect} from 'react';
import styles from "./app.module.css";
import AppHeader from '../app-header/app-header';
import Main from '../main/main';
import Preloader from '../preloader/preloader';
import { useDispatch, useSelector } from 'react-redux';
import { SET_LOADING_INGREDIENTS, SET_DATA_INGREDIENTS } from '../../services/actions/ingredients';

function App() {
  const dispatch = useDispatch();
  const ingredients = useSelector(store => store.ingredients);

  const api = 'https://norma.nomoreparties.space/api/ingredients';

  useEffect(() => {
    fetch(api)
    .then(res => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`);
    })
    .then((res) => {
      dispatch({
        type: SET_DATA_INGREDIENTS,
        data: res.data
      })
      dispatch({
        type: SET_LOADING_INGREDIENTS,
        loading: false
      })
    })
    .catch((error) => {
      console.error(error);
    })
  }, [])

  if (ingredients.loading){
    return(
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
