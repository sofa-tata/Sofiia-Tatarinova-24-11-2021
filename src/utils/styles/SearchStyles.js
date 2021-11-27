import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Autocomplete } from '@material-ui/lab';

export const useStyles = makeStyles((theme) => ({
  search: {
    fill: theme.palette.input.search
  }
}))

export const CustomizedAutocomplete = withStyles((theme) => ({
  popupIndicatorOpen: {
    transform: 'rotate(0deg)'
  },
  root: {
    '& .MuiInput-underline:after': {
      borderBottom: `1px solid ${theme.palette.input.stroke}`,
    },
    '& .MuiInput-underline:hover:before': {
      // Solid underline on hover
      borderBottomColor: theme.palette.input.strokeBefore
    },
    '& .MuiInput-underline:before': {
      borderBottom: `1px solid ${theme.palette.input.stroke}`,
    },
    '& .MuiInputBase-input': {
      color: theme.palette.text.main,
    },
  },
  inputRoot: {
    '& input::placeholder': {
      color: theme.palette.input.placeholder,
    },
  },
  paper: {
    '&.MuiAutocomplete-paper': {
    backgroundColor: theme.palette.background.paper,
    }
  },
  option: {
    '&.MuiAutocomplete-option': {
      color: theme.palette.text.option,
      '&:hover': {
        backgroundColor: theme.palette.background.rowHover,
      },
      // },
      // '&[aria-selected="false"]': {
      //   color: theme.palette.input.label,
      // },
    },
  },
  listbox: {
    '&.MuiAutocomplete-listbox': {
      '&::-webkit-scrollbar': {
        width: '3px',
        height: '3px',
      },
      '&::-webkit-scrollbar-track': {
        boxShadow: 'inset 0 0 5px #FFFFFF',
        borderRadius: '10px',
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'grey',
        borderRadius: '10px',
      },
    },
  },
}))(Autocomplete);