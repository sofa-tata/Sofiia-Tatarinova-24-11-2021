import React from 'react';
import Alert from '@material-ui/lab/Alert';
import { Grid, Collapse, IconButton, Typography } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch, useSelector } from 'react-redux';
import * as actionSnackbar from '../redux/snackbar/snackbarSlice';
import { useStyles } from '../utils/styles/SnackbarStyles';

function CustomizedSnackbar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const snackBarObj = useSelector((state) => state.snackbar);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(actionSnackbar.disableSnackbar());
  };

  return (
    <Grid container className={classes.root}>
      <Collapse in={snackBarObj.visible} timeout={600}>
        <Alert
          elevation={4}
          variant='filled'
          severity={snackBarObj.type}
          action={
            <IconButton
              className={classes.iconButtonSnack}
              elevation={4}
              variant='filled'
              severity={snackBarObj.type}
              onClick={handleClose}
            >
              <CloseIcon className={classes.closeIconSnack} />
            </IconButton>
          }
        >
          <Typography>{snackBarObj.message}</Typography>
        </Alert>
      </Collapse>
    </Grid>
  );
}

export default CustomizedSnackbar;
