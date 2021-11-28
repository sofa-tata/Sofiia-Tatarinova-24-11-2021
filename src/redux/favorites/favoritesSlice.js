import { createSlice } from '@reduxjs/toolkit';

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favorites: []
  },
  reducers: {
    updateFavoritesList: (state, action) => {
      state.favorites = action.payload;
    }
  }
});

export const { updateFavoritesList } = favoritesSlice.actions;

export default favoritesSlice.reducer;
