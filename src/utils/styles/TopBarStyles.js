import { makeStyles, withStyles } from '@material-ui/core/styles';
import { ToggleButton } from '@material-ui/lab';

export const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: theme.palette.background.appbar,
    zIndex: 3000
  },
  title: {
    color: theme.palette.text.main,
    marginLeft: '40px'
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.text.main,
    '&:hover': {
      color: theme.palette.text.menu,
      transition: '.3s'
    }
  },
  menuLink: {
    textDecoration: 'none',
    color: theme.palette.text.main,
    padding: '20px 45px 20px 20px'
  },
  menuIcon: {
    fontSize: 30,
    fill: theme.palette.text.main
  },
  menuButton: {
    padding: '10px',
    marginRight: '20px'
  },
  menuDrawer: {
    minWidth: '50px'
  },
  mobileTopBar: {
    backgroundColor: theme.palette.background.appbar,
    boxShadow: '0px 2px 4px -1px rgb(0, 0, 0, 0.2)'
  },
  currentPageLinkMobile: {
    backgroundColor: theme.palette.text.menu
  },
  mobileDark: {
    marginRight: '20px'
  },
  darkMode: {
    transform: 'rotate(150deg)'
  },
  darkModeSelected: {
    fill: theme.palette.text.yellow
  },
  currentLink: {
    fontWeight: 600
  }
}));

export const DarkModeToggleButton = withStyles((theme) => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      padding: '7px'
    }
  }
}))(ToggleButton);
