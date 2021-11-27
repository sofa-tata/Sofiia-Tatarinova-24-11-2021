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
      themeMode: 'light',
      citiesOptions: [],
      currentCity: {
        value: null,
        inputValue: ''
      },
      currentWeather: null,
      fiveDaysForecast: []
    },
    reducers: {
      setCitiesOptions: (state, action) => {
        state.citiesOptions = action.payload;
      },
      setCurrentCity: (state, action) => {
        console.log('setCurrentCity called', action.payload)
        state.currentCity[action.payload.key] = action.payload.value;
      },
      setCurrentWeather: (state, action) => {
          state.currentWeather = action.payload;
      },
      setFiveDaysForecast: (state, action) => {
          state.fiveDaysForecast = action.payload;
      },
      setThemeMode: (state, action) => {
        state.themeMode = action.payload;
      }
      
    }
  });


export const getCitiesOptions = (typedValue) => async (dispatch) => {  
  const debug = true  
  console.log('typedvalue', typedValue)
  console.log('API_KEY', API_KEY)
  if (debug) {
    const res = cities
    console.log('cities', res)
    dispatch(setCitiesOptions(res));
  } else {
      try {
        const res = await axios.get(`${BASE_URL}${END_POINT.CITIES}`, {params: { apikey: API_KEY, q: typedValue }});
        console.log('cities', res)
        if(res.status === 200 && res.data.length){                 
            dispatch(setCitiesOptions(res.data));
        }    
      } catch(error) {
        dispatch(actionSnackbar.setSnackbar({type: 'error', message: 'Something went wrong', timeout: 3000}));
      }
  }
       
    
  };

export const getCurrentWeather = (locationKey) => async (dispatch) => {   
  const debug = true
  if (debug) {
    const res = currentWeather
    console.log('currentWeather', res)
    dispatch(setCurrentWeather(res[0]));
  } else {
      try {
        const res = await axios.get(`${BASE_URL}${END_POINT.CURRENT_WEATHER}/${locationKey}`, {params: { apikey: API_KEY }});
        console.log('currentWeather', res)
        if(res.status === 200){                 
             dispatch(setCurrentWeather(res.data[0]));
        }    
      } catch(error) {
        dispatch(actionSnackbar.setSnackbar({type: 'error', message: 'Something went wrong', timeout: 3000}));
      }  
  }
     
    
  };


export const getFiveDaysForecast = (locationKey) => async (dispatch) => {    
  const debug = true
  if (debug) {
    const res = fiveDaysForecast
        console.log('fiveDaysForecast', res)                
        dispatch(setFiveDaysForecast(res.DailyForecasts)); 
  } else {
      try {
          const res = await axios.get(`${BASE_URL}${END_POINT.FIVE_DAYS}/${locationKey}`, {params: { apikey: API_KEY, metric: true }});
          console.log('fiveDaysForecast', res)
          if(res.status === 200){                 
              dispatch(setFiveDaysForecast(res.data.DailyForecasts));
          }    
        } catch(error) {
          dispatch(actionSnackbar.setSnackbar({type: 'error', message: 'Something went wrong', timeout: 3000}));
        }
  }
    
    
   
    
  };
  
  export const { setCitiesOptions, setCurrentCity, setCurrentWeather, setFiveDaysForecast, setThemeMode } = mainSlice.actions;
  
  export default mainSlice.reducer;