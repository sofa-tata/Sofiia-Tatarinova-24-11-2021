import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import Search from '../components/Search';
import { ToggleButton } from '@material-ui/lab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { useSelector, useDispatch } from 'react-redux';
import * as favoritesAction from '../redux/favorites/favoritesSlice';
import { useStyles } from '../utils/styles/MainStyles';
import DayComponent from '../components/DayComponent';

function WeatherPage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const currentCity = useSelector((state) => state.main.currentCity);
  const currentWeather = useSelector((state) => state.main.currentWeather);
  const fiveDaysForecast = useSelector((state) => state.main.fiveDaysForecast);
  const favorites = useSelector((state) => state.favorites.favorites);
  const [isCurrentCityInFav, setIsCurrentCityInFav] = useState(false);

  useEffect(() => {
    if (currentCity.value) {
      const isInFav = favorites.some(
        (element) => element.id === currentCity.value.Key
      );
      setIsCurrentCityInFav(isInFav);
    }
  }, [currentCity, favorites]);


  const handleChange = () => {
    if (currentCity) {
      const favoritesCopy = [...favorites];
      if (!isCurrentCityInFav) {
        const newFavorite = {
          id: currentCity.value.Key,
          name: currentCity.inputValue,
          weather: currentWeather.Temperature.Metric.Value
        };
        favoritesCopy.push(newFavorite);
      } else {
        const indexOfRemoved = favoritesCopy.findIndex(
          (element) => element.id === currentCity.Key
        );
        favoritesCopy.splice(indexOfRemoved, 1);
      }
      dispatch(favoritesAction.updateFavoritesList(favoritesCopy));
    }
  };

  return (
    // <Grid container justifyContent='center'>
    //   <Grid item xs={3}>
    //     <Search />
    //   </Grid>
    //   <Grid item xs={10}>

    //   </Grid>
    // </Grid>

    <Grid container justifyContent='center'>
      <Grid item xs={12}>
        <Grid container justifyContent='center'>
          <Grid item xs={11} sm={2} className={classes.searchContainer}>
            <Search />
          </Grid>
        </Grid>
      </Grid>
      {currentCity && currentWeather && fiveDaysForecast.length && (
        <Grid item xs={10} sm={8}>
          <Grid container justifyContent='center'>
            <Grid item xs={12}>
              <Grid container className={classes.cityAndFavContainer}>
                <Grid item xs={6}>
                  <Grid container justifyContent='flex-start'>
                    <Grid item xs={6}>
                      <Grid container>
                        {/* <Grid item>
                IMAGE?
              </Grid> */}
                        <Grid item>
                          <Grid container alignItems='center'>
                            <Grid item xs={12}>
                              <Typography>
                                {currentCity.value?.LocalizedName}
                              </Typography>
                            </Grid>
                            <Grid item xs={12}>
                              <Typography>{`${currentWeather.Temperature.Metric.Value} °C`}</Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  <Grid container justifyContent='flex-end'>
                    <Grid item>
                      <ToggleButton
                        value='check'
                        selected={isCurrentCityInFav}
                        onChange={handleChange}
                      >
                        {isCurrentCityInFav ? (
                          <>
                          <FavoriteIcon style={{ fill: 'pink' }}/>
                          <Typography>&nbsp;&nbsp;In favorites</Typography>
                          </>
                        ) : (
                          <>
                          <FavoriteBorderIcon />
                          <Typography>&nbsp;&nbsp;Add to favorites</Typography>
                          </>
                        )}
                        
                      </ToggleButton>
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
                justifyContent='space-between'
                className={classes.daysContainer}
                spacing={1}
              >
                {fiveDaysForecast.map((day, index) => (
                  <Grid item xs={12} sm={2} key={index}>
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
