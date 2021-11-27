import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles(() => ({
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
      marginTop: '5vh',
      maxHeight: '30px'
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
    }
  }));