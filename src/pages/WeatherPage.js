import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import Search from '../components/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { useSelector, useDispatch } from 'react-redux';
import * as favoritesAction from '../redux/favorites/favoritesSlice';
import { useStyles, CustomizedToggleButton } from '../utils/styles/MainStyles';
import DayComponent from '../components/DayComponent';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import 'animate.css';

function WeatherPage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up('md'));
  const currentCity = useSelector((state) => state.main.currentCity);
  const currentWeather = useSelector((state) => state.main.currentWeather);
  const fiveDaysForecast = useSelector((state) => state.main.fiveDaysForecast);
  const favorites = useSelector((state) => state.favorites.favorites);
  const [isCurrentCityInFav, setIsCurrentCityInFav] = useState(false);

  useEffect(() => {
    if (currentCity.value) {
      const isInFav = favorites.some(
        (element) => element.Key === currentCity.value.Key
      );
      setIsCurrentCityInFav(isInFav);
    }
  }, [currentCity, favorites]);

  const handleChange = () => {
    if (currentCity) {
      const favoritesCopy = [...favorites];
      if (!isCurrentCityInFav) {
        const newFavorite = {
          ...currentCity.value,
          weather: currentWeather.Temperature.Metric.Value
        };
        favoritesCopy.push(newFavorite);
      } else {
        const indexOfRemoved = favoritesCopy.findIndex(
          (element) => element.Key === currentCity.value.Key
        );
        favoritesCopy.splice(indexOfRemoved, 1);
      }
      dispatch(favoritesAction.updateFavoritesList(favoritesCopy));
    }
  };

  return (
    <Grid container justifyContent='center'>
      <Grid item xs={12}>
        <Grid container justifyContent='center'>
          <Grid
            item
            xs={10}
            sm={6}
            md={4}
            lg={2}
            className={classes.searchContainer}
          >
            <Search />
          </Grid>
        </Grid>
      </Grid>
      {currentCity.value && currentWeather && fiveDaysForecast.length && (
        <Grid item xs={10} sm={8}>
          <Grid container justifyContent='center'>
            <Grid item xs={12}>
              <Grid
                container
                className={classes.cityAndFavContainer}
                justifyContent='space-between'
                alignItems='center'
              >
                <Grid item xs={6} md={5} lg={3}>
                  <Grid
                    container
                    alignItems='center'
                    className={classes.mainContent}
                  >
                    <Grid item xs={12}>
                      <Typography className={classes.locationName}>
                        {currentCity.value.LocalizedName}
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography
                        className={classes.temperatureValue}
                      >{`${currentWeather.Temperature.Metric.Value} ??C`}</Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={6}>
                  <Grid container justifyContent='flex-end'>
                    <Grid item>
                      <CustomizedToggleButton
                        value='fav'
                        selected={isCurrentCityInFav}
                        onChange={handleChange}
                      >
                        {isCurrentCityInFav ? (
                          <Grid
                            container
                            justifyContent={!md ? 'center' : 'flex-start'}
                          >
                            <FavoriteIcon
                              className='animate__animated animate__heartBeat'
                            />
                            {md && (
                              <Typography>&nbsp;&nbsp;In favorites</Typography>
                            )}
                          </Grid>
                        ) : (
                          <Grid
                            container
                            justifyContent={!md ? 'center' : 'flex-start'}
                          >
                            <FavoriteBorderIcon />
                            {md && (
                              <Typography>
                                &nbsp;&nbsp;Add to favorites
                              </Typography>
                            )}
                          </Grid>
                        )}
                      </CustomizedToggleButton>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Grid
                container
                justifyContent='center'
                className={classes.mainWeatherTextContainer}
              >
                <Typography className={classes.mainWeatherText}>
                  {currentWeather.WeatherText}
                </Typography>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              <Grid
                container
                justifyContent='center'
                className={classes.daysContainer}
                spacing={1}
              >
                {fiveDaysForecast.map((day, index) => (
                  <Grid item xs={12} sm={12} md={8} lg={2} key={index}>
                    <DayComponent day={day} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}

export default WeatherPage;
