import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios'
import WeatherPage from './pages/WeatherPage';
import FavoritesPage from './pages/FavoritesPage';
import TopBar from './components/TopBar';
import { Route, Switch, useLocation  } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import CustomizedSnackbar from './components/Snackbar';
import { useStyles } from './utils/styles/MainStyles'
import Sunny from './assets/images/glenn-carstens-peters-sunny.jpg';
import Clear from './assets/images/andrej-chudy-clear.jpg';
import Rainy from './assets/images/jessica-knowlden-rainy.jpg';
import Cloudy from './assets/images/harmen-jelle-van-mourik-cloudy.jpg';
import { useSelector, useDispatch } from 'react-redux';
import clsx from 'clsx';
import * as mainAction from './redux/main/mainSlice';
import { API_KEY, BASE_URL, END_POINT } from './utils/constants';
import * as actionSnackbar from './redux/snackbar/snackbarSlice';

const TEL_AVIV_KEY = '215854';

function App() {
  const dispatch = useDispatch()
  const currentWeather = useSelector((state) => state.main.currentWeather);
  const currentCity = useSelector((state) => state.main.currentCity);
  const citiesOptions = useSelector(state => state.main.citiesOptions);
  const location = useLocation()
  let mainTheme = createTheme({
    typography: {
      fontFamily: [
        `'Montserrat', 
        sans-serif`
      ].join(','),
    }
  });
  


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

  const generateBackGroundImage = (weatherText) => {
    if (weatherText.toUpperCase().includes('SUN')) {
      console.log('SUN');
      return `url(${Sunny})`;
    } else if (weatherText.toUpperCase().includes('RAIN')) {
      console.log('RAIN');
      return `url(${Rainy})`;
    } else if (weatherText.toUpperCase().includes('CLOUD')) {
      console.log('CLOUD');
      return `url(${Cloudy})`;
    } else {
      console.log('CLEAR');
      return `url(${Clear})`;
    }
  };

  const styleProps = {
    // backgroundImage: currentWeather && generateBackGroundImage('cloud')
    backgroundImage:
      currentWeather ? generateBackGroundImage(currentWeather.WeatherText) : generateBackGroundImage('')
  };
  const classes = useStyles(styleProps);

  return (
    <ThemeProvider theme={mainTheme}>
      <div 
      className={clsx({
        [classes.mainContainer]: location.pathname !== '/favorites',
        // ['wrapper']: location.pathname !== '/favorites'
      })}
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
