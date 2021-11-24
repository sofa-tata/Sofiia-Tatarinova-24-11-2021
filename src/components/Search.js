import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { Grid, TextField, InputAdornment } from '@material-ui/core';
import { useStyles } from '../utils/styles/SearchStyles';

function Search() {
    const classes = useStyles()
  return (
    <Grid container className={classes.searchContainer}>
      <Grid item xs={12}>
        <TextField
          name='search'
          placeholder='Search city...'
          autoComplete='off'
          variant='outlined'
          style={{ width: '100%' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon style={{ width: 14 }} />
              </InputAdornment>
            )
          }}
        />
      </Grid>
    </Grid>
  )
}

export default Search;
