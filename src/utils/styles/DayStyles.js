import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    dayContainer: {
        backgroundColor: theme.palette.background.day,
        borderRadius: '4px',
        padding: '40px 15px',
        boxShadow: '0px 2px 4px -1px rgb(0, 0, 0, 0.2)',
    },
    dayText: {
        textAlign: 'center',
        color: theme.palette.text.day,
        marginBottom: '20px',
        fontWeight: 600
    },
    dayWeather: {
        textAlign: 'center',
        color: theme.palette.text.day
    }
  }));