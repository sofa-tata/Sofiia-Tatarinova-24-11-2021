import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    cityContainer: {
        backgroundColor: theme.palette.background.favorite,
        borderRadius: '4px',
        padding: '20px 15px',
        boxShadow: '0px 2px 4px -1px rgb(0, 0, 0, 0.2)',
        '&:hover': {
            backgroundColor:  theme.palette.background.favoriteHover,
            transition: '.3s'
        }
    },
    centerText: {
        textAlign: 'center'
    }
  }));