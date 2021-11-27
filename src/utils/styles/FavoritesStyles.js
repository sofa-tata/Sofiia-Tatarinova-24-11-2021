import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    // noLocationsContainer: {
    //     marginTop: '20vh'
    // },
    noLocations: {
        // fontWeight: 600,
        fontSize: '36px',
        color: theme.palette.text.main,
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            fontSize: '22px',
        }
    },
    citiesContainer: {
        marginTop: '18vh',
        [theme.breakpoints.down('sm')]: {
            marginTop: '9vh',
        }
    },
    link: {
        textDecoration: 'none',
        color: theme.palette.text.main
    },
    yourFavorite: {
        color: theme.palette.text.main,
        textAlign: 'center',
        fontSize: '36px',
        marginBottom: '2vh',
        [theme.breakpoints.down('sm')]: {
            fontSize: '22px',
          },
    }
  }));