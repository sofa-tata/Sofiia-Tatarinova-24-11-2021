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
    },
    menuLink: {
      textDecoration: 'none',
      color: '#000000',
      padding: '20px 45px 20px 20px'
    },
    menuButton: {
      padding: '10px',
      marginRight: '20px'
    },
    menuDrawer: {
      minWidth: '50px'
    },
    mobileTopBar: {
      backgroundColor: '#FFFFFF',
      boxShadow: '0px 2px 4px -1px rgb(0, 0, 0, 0.2)'
    },
    currentPageLink: {
      backgroundColor: 'rgba(243, 225, 107, .8)'
    }
  }));