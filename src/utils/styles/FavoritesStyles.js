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
        marginTop: '2vh',
        [theme.breakpoints.down('sm')]: {
            fontSize: '22px',
            marginTop: '12vh',
        }
    },
    citiesContainer: {
        marginTop: '18vh',
        [theme.breakpoints.down('sm')]: {
            marginTop: '12vh',
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
        marginBottom: '4vh',
        [theme.breakpoints.down('sm')]: {
            fontSize: '22px',
          },
    }
  }));