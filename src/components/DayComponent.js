import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { format } from 'date-fns';
import { useStyles } from '../utils/styles/DayStyles';
import 'animate.css';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

function DayComponent(props) {
  const { day } = props;
  const classes = useStyles();
  const [rerendered, setRerendered] = useState(false);
  const currentCity = useSelector((state) => state.main.currentCity);

  useEffect(() => {
    setRerendered(true);
    setTimeout(() => {
      setRerendered(false);
    }, 1000);
  }, [currentCity.value]);

  return (
    <Grid
      container
      justifyContent='center'
      alignItems='center'
      className={clsx(classes.dayContainer, 'animate__animated', {
        animate__fadeIn: rerendered
      })}
    >
      <Grid item xs={10}>
        <Typography className={classes.dayText}>
          {format(new Date(day.Date), 'EEEE')}
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <Typography
          className={classes.dayWeather}
        >{`${day.Temperature.Minimum.Value}° / ${day.Temperature.Maximum.Value}°`}</Typography>
      </Grid>
    </Grid>
  );
}

export default DayComponent;
