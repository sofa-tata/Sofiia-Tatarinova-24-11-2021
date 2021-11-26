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
      citiesOptions: [],
      currentCity: {},
      currentWeather: {},
      fiveDaysForecast: []
    },
    reducers: {
      setCitiesOptions: (state, action) => {
        state.citiesOptions = action.payload;
      },
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


export const getCitiesOptions = (typedValue) => async (dispatch) => {    
  console.log('typedvalue', typedValue)
  console.log('API_KEY', API_KEY)
    try {
        // const res = await axios.get(`${BASE_URL}${END_POINT.CITIES}`, {params: { apikey: API_KEY, q: typedValue }});
        const res = cities
        console.log('cities', res)
        // if(res.status === 200){                 
            await dispatch(setCitiesOptions(res));
        // }    
      } catch(error) {
        dispatch(actionSnackbar.setSnackbar({type: 'error', message: error.message, timeout: 3000}));
      }   
    
  };

export const getCurrentWeather = (locationKey) => async (dispatch) => {    
    try {
        // const res = await axios.get(`${BASE_URL}${END_POINT.CURRENT_WEATHER}/${locationKey}`, {params: { apikey: API_KEY }});
        const res = currentWeather
        console.log('currentWeather', res)
        // if(res.status === 200){                 
            await dispatch(setCurrentWeather(res[0]));
        // }    
      } catch(error) {
        dispatch(actionSnackbar.setSnackbar({type: 'error', message: error.message, timeout: 3000}));
      }   
    
  };


export const getFiveDaysForecast = (locationKey) => async (dispatch) => {    
    try {
        // const res = await axios.get(`${BASE_URL}${END_POINT.FIVE_DAYS}/${locationKey}`, {params: { apikey: API_KEY, metric: true }});
        const res = fiveDaysForecast
        console.log('fiveDaysForecast', res)
        // if(res.status === 200){                 
            await dispatch(setFiveDaysForecast(res));
        // }    
      } catch(error) {
        dispatch(actionSnackbar.setSnackbar({type: 'error', message: error.message, timeout: 3000}));
      }
    
   
    
  };
  
  export const { setCitiesOptions, setCurrentCity, setCurrentWeather, setFiveDaysForecast } = mainSlice.actions;
  
  export default mainSlice.reducer;