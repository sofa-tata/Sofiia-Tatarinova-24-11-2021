import { combineReducers } from '@reduxjs/toolkit';
import mainReducer from '../redux/main/mainSlice';
import favoritesReducer from '../redux/favorites/favoritesSlice';
import snackbarReducer from '../redux/snackbar/snackbarSlice';


const createRootReducer = () =>
  combineReducers({
    snackbar: snackbarReducer,
    main: mainReducer,
    favorites: favoritesReducer
  });

export default createRootReducer;