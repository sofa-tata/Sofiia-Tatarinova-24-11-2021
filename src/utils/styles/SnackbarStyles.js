import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
      position: 'fixed',
      top: '69px',
      right: '30px',
      width: 'auto',
      zIndex: 400,
      '& > * + *': {
        marginTop: theme.spacing(3),
      },
      [theme.breakpoints.down('xs')]: {
        position: 'absolute',
        zIndex: 3,
        width: '90%',
        right: '5%',
      },
    },
  }));