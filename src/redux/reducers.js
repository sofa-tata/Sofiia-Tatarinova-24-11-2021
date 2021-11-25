import { combineReducers } from '@reduxjs/toolkit';
// import favoritesReducer from '../redux/favorites/favoritesSlice';
// import mainReducer from '../redux/main/mainSlice';
import snackbarReducer from '../redux/snackbar/snackbarSlice';


const createRootReducer = () =>
  combineReducers({
    snackbar: snackbarReducer,
    //main: mainReducer
    // favorites: favoritesReducer
  });

export default createRootReducer;