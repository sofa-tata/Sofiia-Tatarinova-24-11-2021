import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import cities from '../../config/cities.json'
import currentWeather from '../../config/currentWeather.json'
import fiveDaysForecast from '../../config/fiveDays.json'
import { API_KEY, BASE_URL, END_POINT } from '../../utils/constants';
import * as actionSnackbar from '../snackbar/snackbarSlice';


export const mainSlice = createSlice({
    name: 'main',
    initialState: {
      currentCity: {
          name: '',
          locationKey: ''
      },
      currentWeather: {},
      fiveDaysForecast: []
    },
    reducers: {
      setCurrentCity: (state, action) => {
        state.currentCity = action.payload;
      },
      setCurrentWeather: (state, action) => {
          state.currentWeather = action.payload;
      },
      setFiveDaysForecast: (state, action) => {
          state.fiveDaysForecast = action.payload;
      }
      
    }
  });


export const getCurrentWeather = (locationKey) => async (dispatch) => {    
    try {
        const res = await axios.get(`${BASE_URL}${END_POINT.CURRENT_WEATHER}/${locationKey}`, {params: { apikey: API_KEY }});
        if(res.status === 200){                 
            await dispatch(setCurrentWeather(res.data));
        }    
      } catch(error) {
        dispatch(actionSnackbar.setSnackbar({type: 'error', message: error.message, timeout: 3000}));
      }   
    
  };


export const getFiveDaysForecast = (locationKey) => async (dispatch) => {    
    try {
        const res = await axios.get(`${BASE_URL}${END_POINT.FIVE_DAYS}/${locationKey}`, {params: { apikey: API_KEY, metric: true }});
        if(res.status === 200){                 
            await dispatch(setFiveDaysForecast(res.data));
        }    
      } catch(error) {
        dispatch(actionSnackbar.setSnackbar({type: 'error', message: error.message, timeout: 3000}));
      }
    
   
    
  };
  
  export const { setCurrentCity, setCurrentWeather, setFiveDaysForecast } = mainSlice.actions;
  
  export default mainSlice.reducer;