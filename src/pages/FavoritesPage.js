import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';

function FavoritesPage() {
    const favorites = useSelector(state => state.favorites.favorites);
    return (
        favorites.length ? 
        <Grid container>
            {favorites.map((city, index) => (
                <Grid item xs={2} key={index}>
                    <Typography>{city.name}</Typography>
                </Grid>
            ))}
        </Grid>
        : <Grid container justifyContent='center'>
            <Grid item xs={3}>
                <Typography>
                    You don't have saved locations yet.
                </Typography>
            </Grid>
        </Grid>
    )
};

export default FavoritesPage;
