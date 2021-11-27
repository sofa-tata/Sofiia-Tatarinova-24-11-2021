import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useStyles } from '../utils/styles/CityStyles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

function CityComponent(props) {
  const { city } = props;
  const classes = useStyles();
  const theme = useTheme()
  const lg = useMediaQuery(theme.breakpoints.only('lg'))
  return (
      <Grid container className={classes.cityContainer} justifyContent='center'>
        <Grid item xs={10}>
          <Typography className={classes.centerText}>{city.LocalizedName.length > 17 && lg ? `${city.LocalizedName.slice(0,17)}...` : city.LocalizedName}</Typography>
        </Grid>
        <Grid item xs={10}>
          <Typography className={classes.centerText}>{`${city.weather} °C`}</Typography>
        </Grid>
      </Grid>
  );
}

export default CityComponent;
