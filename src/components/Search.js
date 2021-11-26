import React, { useEffect } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { Grid, TextField, InputAdornment } from '@material-ui/core';
import { useStyles } from '../utils/styles/SearchStyles';
import { Autocomplete } from '@material-ui/lab';
import * as mainAction from '../redux/main/mainSlice';
import { useSelector, useDispatch } from 'react-redux';

function Search() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const citiesOptions = useSelector(state => state.main.citiesOptions);
  const currentCity = useSelector(state => state.main.currentCity);

  useEffect(() => {
    if (currentCity) {
      dispatch(mainAction.getCurrentWeather(currentCity.Key))
      dispatch(mainAction.getFiveDaysForecast(currentCity.Key))
    }
  }, [currentCity])

  const handleInputChange = (value) => {
    dispatch(mainAction.getCitiesOptions(value))
  }

  const handleChange = (value) => {
    dispatch(mainAction.setCurrentCity(value)) 
  }

  return (
    <Grid container className={classes.searchContainer}>
      <Grid item xs={12}>
      <Autocomplete
                id="city"
                options={citiesOptions}
                autoHighlight
                // autoComplete='off'
                popupIcon={ <SearchIcon style={{ width: 14 }} />}
                value={currentCity}
                inputValue={currentCity && currentCity.LocalizedName}
                getOptionLabel={(option) => option.LocalizedName || ''}
                getOptionSelected={(option, value) =>
                  option.name === value
                }
                onChange={(e, newValue) => handleChange(newValue)}
                onInputChange={(event, newInputValue) => {
                  // console.log(newInputValue, 'newInputvlue')
                  handleInputChange(newInputValue)
                }}
                // renderOption={(props, option) => (
                //     <React.Fragment>
                //     <span>{(option.name)}</span>
                //     </React.Fragment>
                // )}
                renderInput={(params) => {
                  return (
                    <TextField
                      placeholder="Search for city"
                      {...params}
                      inputProps={{
                        ...params.inputProps,
                        // autoComplete: 'new-password',
                      }}
                    />
                  )
                }}
              />
        {/* <TextField
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
        /> */}
      </Grid>
    </Grid>
  )
};

export default Search;
