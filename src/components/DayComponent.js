import React from 'react';
import { Grid, Typography } from '@material-ui/core';

function DayComponent(props) {
    const { day, degrees } = props;
    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography>{day}</Typography>
            </Grid>            
            <Grid item xs={12}>
                <Typography>{degrees}</Typography>
            </Grid>            
        </Grid>
    )
};

export default DayComponent;
