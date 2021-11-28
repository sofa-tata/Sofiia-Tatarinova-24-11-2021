export const API_KEY = process.env.REACT_APP_API_KEY
export const BASE_URL = process.env.REACT_APP_BASE_URL

export const REPOSITORY_NAME = '/Sofiia-Tatarinova-24-11-2021'

export const END_POINT = {
    CITIES: '/locations/v1/cities/autocomplete',
    CURRENT_WEATHER: '/currentconditions/v1',
    FIVE_DAYS: '/forecasts/v1/daily/5day',
    GEOLOCATION: '/locations/v1/cities/geoposition/search'
}

export const darkThemeColors = {
    text: { main: '#F6F6F6', appbar: '#F6F6F6', container: '#1A1A1A', input: '#232323', option: '#F6F6F6', yellow: 'rgba(243, 225, 107)', menu: '#8c8cff', day: '#1A1A1A'},
    background: { appbar: '#323232', main: 'rgb(255, 255, 255, .7)', paper: '#323232', favorite: '#8c8cff', favoriteHover: '#6d6dff', day: 'rgb(255, 255, 255, .8)', rowHover: '#1A1A1A'},
    button: {  toggleSelected: 'rgb(255,255,255, .6)', toggleSelectedHover: 'rgb(255,255,255, .5)'},
    input: {stroke: '#F6F6F6', strokeBefore: 'rgb(255, 255, 255, .7)', strokeHover: 'rgb(255, 255, 255, .3)', placeholder: 'rgb(255, 255, 255, .7)', search: '#F6F6F6'}
}

export const lightThemeColors = {
    text: { main: '#1A1A1A', appbar: '#323232', container: '#1A1A1A', input: '#232323', option: '#232323', yellow: '#edd700', menu: '#6d6dff', day: '#F6F6F6'},
    background: { appbar: '#F6F6F6', primary: '#000000', main: 'rgba(48, 48, 48, 0.8)', paper: '#F6F6F6', favorite: 'rgba(0, 0, 255, 0.4)', favoriteHover: 'rgba(0, 0, 255, 0.5)', day: 'rgba(48, 48, 48, 0.7)', rowHover: '#F6F6F6'},
    button: { toggleSelected: 'rgb(255,255,255, .6)', toggleSelectedHover: 'rgb(255,255,255, .3)' },
    input: {stroke: '#000000', strokeBefore: 'rgba(48, 48, 48, 0.8)',strokeHover: 'rgb(255, 255, 255, .3)', placeholder: 'rgba(48, 48, 48, 0.8)', search: '#1A1A1A'}
}
