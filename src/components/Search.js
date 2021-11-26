import React, { useEffect } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { Grid, TextField, InputAdornment, IconButton} from '@material-ui/core';
import { CustomizedAutocomplete } from '../utils/styles/SearchStyles';
import * as mainAction from '../redux/main/mainSlice';
import { useSelector, useDispatch } from 'react-redux';

function Search() {
  // const classes = useStyles();
  const dispatch = useDispatch();
  const citiesOptions = useSelector(state => state.main.citiesOptions);
  const currentCity = useSelector(state => state.main.currentCity);

  useEffect(() => {
    if (currentCity.value) {
      dispatch(mainAction.getCurrentWeather(currentCity.value.Key))
      dispatch(mainAction.getFiveDaysForecast(currentCity.value.Key))
    }
  }, [currentCity])

  const handleInputChange = (value) => {
    dispatch(mainAction.setCurrentCity({key: 'inputValue', value: value}))
    dispatch(mainAction.getCitiesOptions(value))
  }

  const handleChange = (value) => {
     dispatch(mainAction.setCurrentCity({key: 'value', value: value}))

    // if (currentCity.value) {
    //       dispatch(mainAction.getCurrentWeather(currentCity.value.Key))
    //       dispatch(mainAction.getFiveDaysForecast(currentCity.value.Key))
    //     }

  }

  return (
    // <Grid container className={classes.searchContainer}>
      // <Grid item xs={3}>
      <CustomizedAutocomplete
                id="city"
                freeSolo
                options={citiesOptions}
                autoHighlight
                disableClearable
                value={currentCity && currentCity.value}
                inputValue={currentCity && currentCity.inputValue}
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
                      }}
                      InputProps={{
                        ...params.InputProps,
                        startAdornment: (
                              <SearchIcon />
                        ),
                      }}
                    />
                  )
                }}
              />
        // {/* <TextField
        //   name='search'
        //   placeholder='Search city...'
        //   autoComplete='off'
        //   variant='outlined'
        //   style={{ width: '100%' }}
        //   InputProps={{
        //     startAdornment: (
        //       <InputAdornment position='start'>
        //         <SearchIcon style={{ width: 14 }} />
        //       </InputAdornment>
        //     )
        //   }}
        // /> */}
      //  </Grid>
    // </Grid>
  )
};

export default Search;
