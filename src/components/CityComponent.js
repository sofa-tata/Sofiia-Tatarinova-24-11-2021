import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useStyles } from '../utils/styles/CityStyles';

function CityComponent(props) {
  const { city } = props;
  const classes = useStyles();
  return (
    <Grid container className={classes.cityContainer}>
      <Grid item>
        <Typography>{city.name}</Typography>
      </Grid>
      <Grid item>
        <Typography>{`${city.weather} °C`}</Typography>
      </Grid>
    </Grid>
  );
}

export default CityComponent;
