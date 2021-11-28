import { makeStyles } from '@material-ui/core/styles';
import { ToggleButton } from '@material-ui/lab';
import {  withStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    mainContainer: {
      backgroundImage: props => props.backgroundImage,
      backgroundRepeat: "no-repeat",
			// position: "fixed",
      // transform: 'translate3d(0,0,0)',
      // backfaceVisibility: 'hidden',
			backgroundPosition: "50% 50%",
			backgroundSize: "cover",
			backgroundAttachment: "fixed",
      // height: '100vh',
      // width: '100vw',
      '&::-webkit-backface-visibility': 'hidden',
      '&::-webkit-transform': 'translateZ(0x)',
      minHeight: '100vh'
    },
    searchContainer: {
      marginTop: '7vh',
      maxHeight: '30px',
      [theme.breakpoints.down('sm')]: {
        marginTop: '12vh'
      },
    },
    cityAndFavContainer: {
      marginTop: '50px'
    },
    mainWeatherText: {
      fontSize: '40px',
      color: theme.palette.text.main,
      [theme.breakpoints.down('sm')]: {
        fontSize: '32px'
      },
    },
    mainWeatherTextContainer: {
      marginTop: '60px'
    },
    daysContainer: {
      marginTop: '50px',
      paddingBottom: '10px'
    },
    temperatureValue: {
      fontSize: '26px',
      fontWeight: 600,
      color: theme.palette.text.main,
      [theme.breakpoints.down('sm')]: {
        fontSize: '22px',
      },
    },
    locationName: {
      fontSize: '24px',
      fontWeight: 400,
      color: theme.palette.text.main,
      [theme.breakpoints.down('sm')]: {
        fontSize: '20px',
      },
    },
    mainContent: {
      // backgroundColor: 'pink',
      padding: '15px',
      borderRadius: '4px'
    },
    heart: {
      // fill: theme.palette.button.heart
    }
    
  }));

  export const CustomizedToggleButton = withStyles((theme) => ({
    root: {
      minWidth: '179px',
      [theme.breakpoints.down('sm')]: {
        minWidth: '55px',
      },
      backgroundColor: 'transparent',
      border: 'none',
      color: theme.palette.text.main,
      textTransform: 'none',
      '&:hover': {
        backgroundColor: theme.palette.button.toggleSelectedHover,
        transition: '.3s'
      },
      '&.MuiToggleButton-root.Mui-selected': {
        backgroundColor: 'transparent',
      color: theme.palette.text.main,
      textTransform: 'none',
      '&:hover': {
        backgroundColor: theme.palette.button.toggleSelectedHover,
        transition: '.3s'
      }
      }
    },
    
    }))(ToggleButton);