import {useState, useEffect} from 'react';
import styles from "./app.module.css";
import AppHeader from '../app-header/app-header';
import Main from '../main/main';
import Preloader from '../preloader/preloader';
import { data } from "../../utils/data";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [ingridients, setIngridients] = useState(null);
  const api = 'https://norma.nomoreparties.space/api/ingredients'

  useEffect(() => {
    fetch(api)
    .then(res => res.json())
    .then((res) => {
      setIngridients(res.data)
      setIsLoading(false);
      console.log(res)
    })
    .catch((error) => {
      console.error(error);
    })
  }, [])

  if(isLoading){
    return(
      <Preloader />
    )
  }
  return (
    <div className={styles.app}>
      <AppHeader></AppHeader>
      <Main ingridients={ingridients}></Main>
    </div>
  );
}

export default App;
