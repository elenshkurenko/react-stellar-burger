import { combineReducers } from 'redux';
import { ingredientsReducer } from './ingredients';
import { ingredientReducer } from './ingredient';
import { draggetIngredientsReducer } from './dragged-ingredients';
import { orderReducer } from './order';
import { tabsReducer } from './tabs';

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  ingredient: ingredientReducer,
  draggetIngredients: draggetIngredientsReducer,
  order: orderReducer,
  tabs: tabsReducer
})