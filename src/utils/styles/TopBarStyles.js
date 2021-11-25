import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    header: {
      backgroundColor: '#FFFFFF',
      zIndex: 3000
    },
    title: {
      color: '#000000',
      marginLeft: '40px'
    },
    link: {
      textDecoration: 'none',
      color: '#000000'
    }
  }));