import React, { useState } from 'react';
import {
  AppBar,
  Grid,
  Toolbar,
  Typography,
  IconButton,
  SwipeableDrawer
} from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';
import { useStyles, DarkModeToggleButton } from '../utils/styles/TopBarStyles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import { useSelector, useDispatch } from 'react-redux';
import * as mainAction from '../redux/main/mainSlice';
import { REPOSITORY_NAME } from '../utils/constants';

function TopBar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.down('sm'));
  const [menuState, setMenuState] = useState(false);
  const location = useLocation();
  const themeMode = useSelector((state) => state.main.themeMode);

  const toggleThemeMode = () => {
    const newMode = themeMode === 'light' ? 'dark' : 'light';
    dispatch(mainAction.setThemeMode(newMode));
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
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
            <Grid item sm={4}>
              <Link to={`${REPOSITORY_NAME}/home`} className={classes.link}>
                <Typography variant='h6' className={classes.title}>
                  Herolo Weather Task
                </Typography>
              </Link>
            </Grid>
            <Grid item xs={4}>
              <Grid container justifyContent='flex-end' alignItems='center'>
                <Grid item xs={4}>
                  <DarkModeToggleButton
                    value='mode'
                    selected={themeMode === 'dark'}
                    onChange={toggleThemeMode}
                  >
                    <Brightness3Icon
                      className={clsx(classes.darkMode, {
                        [classes.darkModeSelected]: themeMode === 'dark'
                      })}
                    />
                  </DarkModeToggleButton>
                </Grid>
                <Grid item xs={3}>
                  <Link to={`${REPOSITORY_NAME}/home`} className={classes.link}>
                    <Typography
                      className={clsx({
                        [classes.currentLink]:
                          location.pathname !== `${REPOSITORY_NAME}/favorites`
                      })}
                    >
                      Home
                    </Typography>
                  </Link>
                </Grid>
                <Grid item xs={3}>
                  <Link to={`${REPOSITORY_NAME}/favorites`} className={classes.link}>
                    <Typography
                      className={clsx({
                        [classes.currentLink]:
                          location.pathname === `${REPOSITORY_NAME}/favorites`
                      })}
                    >
                      Favorites
                    </Typography>
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  };

  const renderMenuList = () => {
    return (
      <>
        <Link
          to={`${REPOSITORY_NAME}/home`}
          onClick={toggleDrawer(false)}
          className={clsx(classes.menuLink, {
            [classes.currentPageLinkMobile]: location.pathname !== `${REPOSITORY_NAME}/favorites`
          })}
        >
          HOME
        </Link>
        <Link
          to={`${REPOSITORY_NAME}/favorites`}
          onClick={toggleDrawer(false)}
          className={clsx(classes.menuLink, {
            [classes.currentPageLinkMobile]: location.pathname === `${REPOSITORY_NAME}/favorites`
          })}
        >
          FAVORITES
        </Link>
      </>
    );
  };

  const renderMobileTopBar = () => {
    return (
      <AppBar position='fixed' className={classes.mobileTopBar} elevation={0}>
        <Grid
          container
          direction='row'
          alignItems='center'
          justifyContent='flex-end'
        >
          <>
            <DarkModeToggleButton
              value='mode'
              className={classes.mobileDark}
              selected={themeMode === 'dark'}
              onChange={toggleThemeMode}
            >
              <Brightness3Icon
                className={clsx(classes.darkMode, {
                  [classes.darkModeSelected]: themeMode === 'dark'
                })}
              />
            </DarkModeToggleButton>
            <IconButton
              aria-label='menu'
              onClick={toggleDrawer(true)}
              className={classes.menuButton}
            >
              <MenuIcon className={classes.menuIcon} />
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
    );
  };

  return <>{xs ? renderMobileTopBar() : renderDesktopTopBar()}</>;
}

export default TopBar;
