import React, { useState } from 'react';
import {
  AppBar,
  Grid,
  Toolbar,
  Typography,
  IconButton,
  ListItem,
  SwipeableDrawer
} from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import { useStyles } from '../utils/styles/TopBarStyles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';

function TopBar() {
  const classes = useStyles();
  const theme = useTheme()
  const xs = useMediaQuery(theme.breakpoints.down('sm'))
  const [menuState, setMenuState] = useState(false);
  const location = useLocation()

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setMenuState(open);
  };

  const renderDesktopTopBar = () => {
    return (
          <AppBar position='sticky' className={classes.header}>
      <Toolbar>
        <Grid container justifyContent='space-between' alignItems='center'>
          <Grid item xs={8}>
            <Link to={'/home'} className={classes.link}>
              <Typography variant='h6' className={classes.title}>
                Herolo Weather Task
              </Typography>
            </Link>
          </Grid>
          <Grid item xs={4}>
            <Grid container justifyContent='flex-end'>
              <Grid item xs={4}>
                <Link to={'/home'} className={classes.link}>
                  <Typography>Home</Typography>
                </Link>
              </Grid>
              <Grid item xs={4}>
                <Link to={'/favorites'} className={classes.link}>
                  <Typography>Favorites</Typography>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
    )
  }

  const renderMenuList = () => {
    return (
      <>
      <Link to='/home' onClick={toggleDrawer(false)} className={clsx(classes.menuLink, {
        [classes.currentPageLink]: location.pathname !== '/favorites'
      })}>
        HOME
      </Link>
      <Link to='/favorites' onClick={toggleDrawer(false)} className={clsx(classes.menuLink, {
        [classes.currentPageLink]: location.pathname === '/favorites'
      })}>FAVORITES</Link>
      </>
    )
  }

  const renderMobileTopBar = () => {
    return (
      <AppBar position='fixed' className={classes.mobileTopBar} elevation={0}>
      <Grid container direction='row' alignItems='center' justifyContent='flex-end'>
          <>
              <IconButton  
                aria-label="menu" 
                onClick={toggleDrawer(true)} 
                className={classes.menuButton}
              >
                <MenuIcon style={{ fontSize: 30 }} />
              </IconButton>
            <SwipeableDrawer
              anchor='right'
              open={menuState}
              onClose={toggleDrawer(false)}
              onOpen={toggleDrawer(true)}
            >
              {renderMenuList()}
            </SwipeableDrawer>
          </>
      </Grid>
    </AppBar>
    )
  }

  return (
    <>
    {xs ? renderMobileTopBar() : renderDesktopTopBar()}
    </>
  )
};

export default TopBar;
