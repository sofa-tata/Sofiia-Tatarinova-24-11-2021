import React, { useEffect } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { TextField } from '@material-ui/core';
import { CustomizedAutocomplete } from '../utils/styles/SearchStyles';
import * as mainAction from '../redux/main/mainSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useStyles } from '../utils/styles/SearchStyles';

function Search() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const citiesOptions = useSelector((state) => state.main.citiesOptions);
  const currentCity = useSelector((state) => state.main.currentCity);

  useEffect(() => {
    if (currentCity.value) {
      dispatch(mainAction.getCurrentWeather(currentCity.value.Key));
      dispatch(mainAction.getFiveDaysForecast(currentCity.value.Key));
    }
  }, [currentCity]);

  const handleInputChange = (value) => {
    dispatch(mainAction.setCurrentCity({ key: 'inputValue', value: value }));
    dispatch(mainAction.getCitiesOptions(value));
  };

  const handleChange = (value) => {
    dispatch(mainAction.setCurrentCity({ key: 'value', value: value }));
  };

  return (
    <CustomizedAutocomplete
      id='city'
      freeSolo
      options={citiesOptions}
      autoHighlight
      disableClearable
      value={currentCity.value}
      inputValue={currentCity.inputValue || ''}
      getOptionLabel={(option) => option.LocalizedName || ''}
      getOptionSelected={(option, value) => option.name === value}
      onChange={(e, newValue) => handleChange(newValue)}
      onInputChange={(event, newInputValue) => {
        handleInputChange(newInputValue);
      }}
      renderInput={(params) => {
        return (
          <TextField
            placeholder='Search for city'
            {...params}
            inputProps={{
              ...params.inputProps
            }}
            InputProps={{
              ...params.InputProps,
              startAdornment: <SearchIcon className={classes.search} />
            }}
          />
        );
      }}
    />
  );
}

export default Search;
