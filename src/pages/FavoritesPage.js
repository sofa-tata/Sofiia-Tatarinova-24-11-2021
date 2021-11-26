import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import CityComponent from '../components/CityComponent';
import { useStyles } from '../utils/styles/FavoritesStyles';
import { Link } from 'react-router-dom';
import * as mainAction from '../redux/main/mainSlice';

function FavoritesPage() {
  const classes = useStyles();
  const dispatch = useDispatch()
  const favorites = useSelector((state) => state.favorites.favorites);

  const openFavoriteCity = (id) => {
    
    dispatch(mainAction.getCurrentWeather(id))
    dispatch(mainAction.getFiveDaysForecast(id))
  }

  return favorites.length ? (
    <Grid container justifyContent='center'>
      <Grid item xs={10} sm={8}>
        <Grid container className={classes.citiesContainer} spacing={1}>
          {favorites.map((city, index) => (
            <Grid item xs={2} key={index}>
              <Link to='/home' className={classes.link} onClick={() => openFavoriteCity(city.id)}>
                <CityComponent city={city} />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  ) : (
    <Grid
      container
      justifyContent='center'
      className={classes.noLocationsContainer}
    >
      <Grid item>
        <Typography>You don't have saved locations yet.</Typography>
      </Grid>
    </Grid>
  );
}

export default FavoritesPage;
