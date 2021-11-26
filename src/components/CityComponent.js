import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useStyles } from '../utils/styles/CityStyles';

function CityComponent(props) {
  const { city } = props;
  const classes = useStyles();
  return (
      <Grid container className={classes.cityContainer} justifyContent='center'>
        <Grid item xs={10}>
          <Typography className={classes.centerText}>{city.name}</Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography className={classes.centerText}>{`${city.weather} °C`}</Typography>
        </Grid>
      </Grid>
  );
}

export default CityComponent;
