import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { format } from 'date-fns';
import { useStyles } from '../utils/styles/DayStyles';

function DayComponent(props) {
  const { day } = props;
  const classes = useStyles();
  return (
    <Grid
      container
      justifyContent='center'
      alignItems='center'
      className={classes.dayContainer}
    >
      <Grid item xs={10}>
        <Typography className={classes.centerText}>
          {format(new Date(day.Date), 'EEEE')}
        </Typography>
      </Grid>
      <Grid item xs={10}>
        <Typography
        className={classes.centerText}
        >{`${day.Temperature.Minimum.Value}° / ${day.Temperature.Maximum.Value}°`}</Typography>
      </Grid>
    </Grid>
  );
}

export default DayComponent;
