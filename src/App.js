import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios'
import WeatherPage from './pages/WeatherPage';
import FavoritesPage from './pages/FavoritesPage';
import TopBar from './components/TopBar';
import { Route, Switch, useLocation  } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import CustomizedSnackbar from './components/Snackbar';
import { useStyles } from './utils/styles/MainStyles'
import Sunny from './assets/images/glenn-carstens-peters-sunny.jpg';
import Clear from './assets/images/pexels-scott-webb-clear.jpg';
import Rainy from './assets/images/kumiko-shimizu-rainy.jpg';
import Cloudy from './assets/images/harmen-jelle-van-mourik-cloudy.jpg';
import Snow from './assets/images/fabian-mardi-snow.jpg';
import SunnyDark from './assets/images/irina-iriser-sunny-dark.jpg';
import ClearDark from './assets/images/kai-pilger-clear-dark.jpg';
import RainyDark from './assets/images/anna-atkins-rainy-dark.jpg';
import CloudyDark from './assets/images/samuel-bryngelsson-cloudy-dark.jpg';
import SnowDark from './assets/images/nathan-fertig-snow-dark.jpg';
import FavBG from './assets/images/fakurian-design-fav.jpg';
import FavBGDark from './assets/images/brennan-burling-fav-dark.jpg';
import { useSelector, useDispatch } from 'react-redux';
import * as mainAction from './redux/main/mainSlice';
import { API_KEY, BASE_URL, END_POINT } from './utils/constants';
import * as actionSnackbar from './redux/snackbar/snackbarSlice';
import { lightThemeColors, darkThemeColors } from './utils/constants';

const TEL_AVIV_KEY = '215854';

function App() {
  const dispatch = useDispatch()
  const currentWeather = useSelector((state) => state.main.currentWeather);
  const themeMode = useSelector((state) => state.main.themeMode);
  const location = useLocation()

  console.log('darkThemeColors', darkThemeColors)
  console.log('lightThemeColors', lightThemeColors)
  
  // let darkTheme = createTheme({
  //   typography: {
  //     palette: darkThemeColors,
  //     fontFamily: [
  //       `'Montserrat', 
  //       sans-serif`
  //     ].join(','),
  //   }
  // });


  const mainTheme = createTheme({
    palette: themeMode === 'light' ? lightThemeColors : darkThemeColors,
    typography: {
      fontFamily: ['Montserrat', 'sans-serif'].join(','),
      color: ''
    }
  })


  console.log('mainTheme', mainTheme)
  


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(showLocation, errorHandler)
  }, [])

  useEffect(() => {
    dispatch(mainAction.setCurrentCity({key: 'inputValue', value: 'Tel Aviv'}))
    async function getOptions () {
      try {
        const res = await axios.get(`${BASE_URL}${END_POINT.CITIES}`, {params: { apikey: API_KEY, q: 'Tel Aviv' }})
        if (res.status === 200 && res.data.length) {
            const newValue = res.data.find(option => option.Key === TEL_AVIV_KEY)
            dispatch(mainAction.setCurrentCity({key: 'value', value: newValue}))
        }
      } catch (error) {
        dispatch(actionSnackbar.setSnackbar({type: 'error', message: 'Something went wrong', timeout: 3000}));
      }
      }
    getOptions()
  }, [])

  const showLocation = async (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    try {
      const res = await axios.get(`${BASE_URL}${END_POINT.GEOLOCATION}`, {params: { apikey: API_KEY, q: `${latitude},${longitude}`, toplevel: true }})
      if (res.status === 200) {
        console.log('res', res)
          dispatch(mainAction.setCurrentCity({key: 'inputValue', value: res.data.LocalizedName}))
          dispatch(mainAction.setCurrentCity({key: 'value', value: res.data}))
      }
    } catch (error) {
      dispatch(actionSnackbar.setSnackbar({type: 'error', message: 'Something went wrong', timeout: 3000}));
    }
 }

 const errorHandler = (err) => {
    // if(err.code === 1) {
    //    dispatch(actionSnackbar.setSnackbar({type: 'error', message: 'Access is denied!', timeout: 3000}));
    // } else 
    if( err.code === 2) {
       dispatch(actionSnackbar.setSnackbar({type: 'error', message: 'Position is unavailable!', timeout: 3000}));
    } 
 }

  const generateBackGroundImage = (weatherText, themeMode, pathname) => {
    if (pathname === '/favorites') {
      if (themeMode === 'light') {
        return `url(${FavBG})`;
      } else {
        return `url(${FavBGDark})`;
      }
    } else {
      if (themeMode === 'light') {
      if (weatherText.toUpperCase().includes('SUN')) {
        console.log('SUN');
        return `url(${Sunny})`;
      } else if (weatherText.toUpperCase().includes('RAIN')) {
        console.log('RAIN');
        return `url(${Rainy})`;
      } else if (weatherText.toUpperCase().includes('CLOUD') || weatherText.toUpperCase().includes('OVERCAST')) {
        console.log('CLOUD');
        return `url(${Cloudy})`;
      } else if (weatherText.toUpperCase().includes('SNOW')) {
        console.log('SNOW');
      return `url(${Snow})`;
      }  else {
        console.log('CLEAR');
        return `url(${Clear})`;
      }
    } else {
      if (weatherText.toUpperCase().includes('SUN')) {
        console.log('SUN');
        return `url(${SunnyDark})`;
      } else if (weatherText.toUpperCase().includes('RAIN')) {
        console.log('RAIN');
        return `url(${RainyDark})`;
      } else if (weatherText.toUpperCase().includes('CLOUD') || weatherText.toUpperCase().includes('OVERCAST')) {
        console.log('CLOUD');
        return `url(${CloudyDark})`;
      } else if (weatherText.toUpperCase().includes('SNOW')) {
        console.log('SNOW');
      return `url(${SnowDark})`;
      }  else {
        console.log('CLEAR');
        return `url(${ClearDark})`;
      }
    }
    }
    
    
  };

  const styleProps = {
    // backgroundImage: currentWeather ? generateBackGroundImage('sun', themeMode, location.pathname) : generateBackGroundImage('', themeMode, location.pathname)

    backgroundImage:
      currentWeather ? generateBackGroundImage(currentWeather.WeatherText, themeMode, location.pathname) : generateBackGroundImage('', themeMode, location.pathname)
  };
  const classes = useStyles(styleProps);

  return (
    <ThemeProvider theme={mainTheme}>
      <div 
      className={classes.mainContainer}
        // ['wrapper']: location.pathname !== '/favorites'
        >
        <TopBar />
        <CustomizedSnackbar />
        <Switch>
          <Route exact path='/' component={WeatherPage} />
          <Route exact path='/home' component={WeatherPage} />
          <Route exact path='/favorites' component={FavoritesPage} />
        </Switch>
      </div>
    </ThemeProvider>
  )
}

export default App;
