import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import CityComponent from '../components/CityComponent';
import { useStyles } from '../utils/styles/FavoritesStyles';

function FavoritesPage() {
  const classes = useStyles();
  const favorites = useSelector((state) => state.favorites.favorites);
  return favorites.length ? (
    <Grid container>
      <Grid item xs={10} sm={8}>
        <Grid container justifyContent='space-between'>
          {favorites.map((city, index) => (
            <Grid item xs={2} key={index}>
              <CityComponent city={city} />
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
