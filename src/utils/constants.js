export const API_KEY = process.env.REACT_APP_API_KEY
export const BASE_URL = process.env.REACT_APP_BASE_URL

export const END_POINT = {
    CITIES: '/locations/v1/cities/autocomplete',
    CURRENT_WEATHER: '/currentconditions/v1',
    FIVE_DAYS: '/forecasts/v1/daily/5day'
}

export const darkThemeColors = {
    text: { main: '#F6F6F6', appbar: '#323232', container: '#1A1A1A', input: '#232323' },
    background: { main: 'rgb(255, 255, 255, .7)', favorite: 'rgba(0, 0, 255, 0.4)', favoriteHover: 'rgba(0, 0, 255, 0.5)', day: ''}
}

export const lightThemeColors = {
    text: { main: '#000000', appbar: '#323232', container: '#1A1A1A', input: '#232323' },
    background: { main: 'rgba(48, 48, 48, 0.8)', favorite: 'rgba(0, 0, 255, 0.4)', favoriteHover: 'rgba(0, 0, 255, 0.5)', day: ''}
}