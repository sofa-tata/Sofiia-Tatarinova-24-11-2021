import React from 'react';
import { Grid} from '@material-ui/core';
import Search from '../components/Search';

function WeatherPage() {

    return (
        <Grid container>
            <Grid item xs={12}>
                <Grid container justifyContent='center'>
                    <Grid item xs={3}>
                        <Search />
                    </Grid>
                </Grid>
            </Grid>
            
        </Grid>
    )
};

export default WeatherPage;
