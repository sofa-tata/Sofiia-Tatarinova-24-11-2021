import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import Search from '../components/Search';
import { ToggleButton } from '@material-ui/lab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { useSelector, useDispatch } from 'react-redux';
import * as favoritesAction from'../redux/favorites/favoritesSlice';

function WeatherPage () {
    const dispatch = useDispatch();
    const currentCity = useSelector(state => state.main.currentCity);
    const currentWeather = useSelector(state => state.main.currentWeather);
    const favorites = useSelector(state => state.favorites.favorites);
    const [isCurrentCityInFav, setIsCurrentCityInFav] = useState(false);
    

    useEffect(() => {
      const isInFav = favorites.some(element => element.id === currentCity.Key);
      setIsCurrentCityInFav(isInFav)
    }, [currentCity, favorites])

    const handleChange = () => {
        const favoritesCopy = [...favorites];
        if (!isCurrentCityInFav) {
            const newFavorite = {
                id: currentCity.Key,
                name: currentCity.LocalizedName,
                // weather: currentWeather.Temperature.Metric.Value
            }
            favoritesCopy.push(newFavorite);        
        } else {
          const indexOfRemoved = favoritesCopy.findIndex(element => element.id === currentCity.Key);
          favoritesCopy.splice(indexOfRemoved, 1);
        }
        dispatch(favoritesAction.updateFavoritesList(favoritesCopy));
    };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container justifyContent='center'>
          <Grid item xs={3}>
            <Search />
          </Grid>
        </Grid>
      </Grid>
      {/* {currentCity && currentWeather && currentWeather.Temperature && */}
      <Grid item xs={10}>
        <Grid container justifyContent='center'>
          <Grid item xs={6}>
            <Grid container justifyContent='flex-start'>
              <Grid item xs={6}>
                  <Grid container>
                    {/* <Grid item>
                      IMAGE?
                    </Grid> */}
                    <Grid item>
                      <Grid container>
                        <Grid item xs={12}>
                          {currentCity.LocalizedName}
                        </Grid>
                        <Grid item xs={12}>
                          {/* {currentWeather.Temperature.Metric.Value} */}
                        </Grid>
                      </Grid>

                    </Grid>
                  </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid container justifyContent='flex-end'>
              <Grid item>
                <ToggleButton
                  value='check'
                  selected={isCurrentCityInFav}
                  onChange={handleChange}
                >
                  {isCurrentCityInFav ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </ToggleButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* } */}
    </Grid>
  )
}

export default WeatherPage;
