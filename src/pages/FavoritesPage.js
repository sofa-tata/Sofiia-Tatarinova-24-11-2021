import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import CityComponent from '../components/CityComponent';
import { useStyles } from '../utils/styles/FavoritesStyles';
import { Link } from 'react-router-dom';
import * as mainAction from '../redux/main/mainSlice';
import { REPOSITORY_NAME } from '../utils/constants';

function FavoritesPage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);

  const openFavoriteCity = (city, name) => {
    dispatch(mainAction.getCitiesOptions(name));
    dispatch(mainAction.setCurrentCity({ key: 'inputValue', value: name }));
    dispatch(mainAction.setCurrentCity({ key: 'value', value: city }));
  };

  return (
    <Grid container justifyContent='center'>
      <Grid item xs={10} sm={8}>
        <Grid container className={classes.citiesContainer}>
          {favorites.length ? (
            <>
              <Grid item xs={12}>
                <Typography className={classes.yourFavorite}>
                  Weather in your favorite cities:{' '}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={1} justifyContent='center'>
                  {favorites.map((city, index) => (
                    <Grid item xs={12} sm={12} md={6} lg={3} key={index}>
                      <Link
                        to={`${REPOSITORY_NAME}/home`}
                        className={classes.link}
                        onClick={() => openFavoriteCity(city, city.name)}
                      >
                        <CityComponent city={city} />
                      </Link>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </>
          ) : (
            <Grid item xs={12}>
              <Typography className={classes.noLocations}>
                You don't have saved locations yet.
              </Typography>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default FavoritesPage;
