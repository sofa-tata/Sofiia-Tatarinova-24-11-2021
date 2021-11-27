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
      fontSize: '40px'
    },
    mainWeatherTextContainer: {
      marginTop: '60px'
    },
    daysContainer: {
      marginTop: '50px',
      paddingBottom: '10px'
    },
    temperatureValue: {
      fontSize: '22px',
      fontWeight: 600
    },
    locationName: {
      fontSize: '22px',
      fontWeight: 600
    },
    mainContent: {
      backgroundColor: 'pink',
      padding: '15px',
      borderRadius: '4px'
    },
    
  }));

  export const CustomizedToggleButton = withStyles((theme) => ({
    root: {
      backgroundColor: 'rgb(255,192,203, .4)',
      color: '#000000',
      textTransform: 'none',
      '&:hover': {
        backgroundColor: 'rgb(255,192,203, .5)',
        transition: '.3s'
      },
      '&.MuiToggleButton-root.Mui-selected': {
        backgroundColor: 'rgb(255,255,255, .6)',
      color: '#000000',
      textTransform: 'none',
      '&:hover': {
        backgroundColor: 'rgb(255,255,255)',
        transition: '.3s'
      }
      }
    },
    
    }))(ToggleButton);