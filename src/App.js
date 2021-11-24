import './App.css';
import WeatherPage from './pages/WeatherPage';
import FavoritesPage from './pages/FavoritesPage';
import TopBar from './components/TopBar';
import { Route, Switch } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

function App() {
  let mainTheme = createTheme({
    typography: {
      fontFamily: [
        `'Montserrat', 
        sans-serif`
      ].join(','),
    }
  });

  return (
    <ThemeProvider theme={mainTheme}>
      <div>
        <TopBar />
        <Switch>
          <Route exact path='/' component={WeatherPage} />
          <Route exact path='/home' component={WeatherPage} />
          <Route exact path='/favorites' component={FavoritesPage} />
        </Switch>
      </div>
    </ThemeProvider>
  )
}

export default App;
