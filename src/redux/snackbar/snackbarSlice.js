import { createSlice } from '@reduxjs/toolkit'


export const snackbarSlice = createSlice({
    name: 'snackbar',
    initialState: {
        visible: false,
        timeout: 3000,
        message: '',
        type: 'error'
    },
    reducers: {
      turnOnSnackbar: (state, action) => {
        state.visible = true;
        state.timeout = action.payload.timeout;
        state.message = action.payload.message;
        state.type = action.payload.type;
      },
      turnOffSnackbar: (state) => {
        console.log('turnOffSnackbar')
          state.visible = false;
      }
      
    }
});

let timeoutInstance = null;

export const disableSnackbar = () => (dispatch) => {
  console.log('disableSnackbar')
    dispatch(turnOffSnackbar());
    clearTimeout(timeoutInstance);
  };
  
  export const setSnackbar = ({type, message, timeout = 2000}) => (dispatch) =>{ 
    dispatch(turnOnSnackbar({type,message,timeout}));
    timeoutInstance = setTimeout(() => {
        dispatch(disableSnackbar());
    }, timeout);
  }
  

export const { turnOnSnackbar, turnOffSnackbar } = snackbarSlice.actions;
  
export default snackbarSlice.reducer;