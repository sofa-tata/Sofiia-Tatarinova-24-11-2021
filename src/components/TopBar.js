import {
  AppBar,
  Grid,
  makeStyles,
  Toolbar,
  Typography
} from '@material-ui/core';
import { Link } from 'react-router-dom';

function TopBar() {
  const classes = useStyles();

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

export default TopBar;

const useStyles = makeStyles((theme) => ({
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
