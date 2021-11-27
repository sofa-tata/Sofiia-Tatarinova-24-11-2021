import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles(() => ({
    cityContainer: {
        backgroundColor: 'rgba(0, 0, 255, 0.4)',
        borderRadius: '4px',
        padding: '20px 15px',
        boxShadow: '0px 2px 4px -1px rgb(0, 0, 0, 0.2)',
        '&:hover': {
            backgroundColor: 'rgba(0, 0, 255, 0.5)',
            transition: '.3s'
        }
    },
    centerText: {
        textAlign: 'center'
    }
  }));