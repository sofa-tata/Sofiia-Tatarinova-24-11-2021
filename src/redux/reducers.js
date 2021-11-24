import { combineReducers } from '@reduxjs/toolkit';
// import favoritesReducer from '../redux/favorites/favoritesSlice';


const createRootReducer = () =>
  combineReducers({
    // favorites: favoritesReducer
  });

export default createRootReducer;