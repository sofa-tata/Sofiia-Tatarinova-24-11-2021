import React, { useEffect } from 'react';
import './App.css';
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

function App() {
  const currentWeather = useSelector((state) => state.main.currentWeather);
  const location = useLocation()
  let mainTheme = createTheme({
    typography: {
      fontFamily: [
        `'Montserrat', 
        sans-serif`
      ].join(','),
    }
  });

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
      <div className={clsx({
        [classes.mainContainer]: location.pathname !== '/favorites'})}>
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
