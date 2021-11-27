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
        color: theme.palette.text.yellow,
        transition: '.3s'
      }
    },
    menuLink: {
      textDecoration: 'none',
      color: theme.palette.text.main,
      padding: '20px 45px 20px 20px',
      
    },
    pageLinkMobileHover: {
      '&:hover': {
        color: theme.palette.text.yellow,
        transition: '.3s'
      }
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
      backgroundColor: theme.palette.text.yellow
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
      color: theme.palette.text.yellow
    }
  }));


  export const DarkModeToggleButton = withStyles((theme) => ({
    root: {
      [theme.breakpoints.down('sm')]: {
        padding: '7px'
      },
      // backgroundColor: theme.palette.button.toggle,
      // color: theme.palette.text.main,
      // textTransform: 'none',
      // '&:hover': {
      //   backgroundColor: theme.palette.button.toggleHover,
      //   transition: '.3s'
      // },
      // '&.MuiToggleButton-root.Mui-selected': {
      //   backgroundColor: theme.palette.button.toggleSelected,
      // color: theme.palette.text.main,
      // textTransform: 'none',
      // '&:hover': {
      //   backgroundColor: theme.palette.button.toggleSelectedHover,
      //   transition: '.3s'
      // }
      // }
    },
    
    }))(ToggleButton);