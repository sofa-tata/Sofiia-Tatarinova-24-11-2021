import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    noLocationsContainer: {
        marginTop: '20vh'
    },
    citiesContainer: {
        marginTop: '18vh',
        [theme.breakpoints.down('sm')]: {
            marginTop: '9vh',
        }
    },
    link: {
        textDecoration: 'none',
        color: '#000000'
    },
    yourFavorite: {
        color: '#000000',
        textAlign: 'center',
        fontSize: '36px',
        marginBottom: '2vh',
        [theme.breakpoints.down('sm')]: {
            fontSize: '22px',
          },
    }
  }));