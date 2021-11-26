import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles(() => ({
    mainContainer: {
      backgroundImage: props => props.backgroundImage,
      backgroundRepeat: "no-repeat",
			backgroundPosition: "center center",
			backgroundSize: "cover",
			backgroundAttachment: "fixed",
      height: '100vh',
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
      marginTop: '50px'
    }
  }));