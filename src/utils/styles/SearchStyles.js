import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Autocomplete } from '@material-ui/lab';

// export const useStyles = makeStyles((theme) => ({
//     autocomplete:
// }));

export const CustomizedAutocomplete = withStyles((theme) => ({
  popupIndicatorOpen: {
    transform: 'rotate(0deg)'
  },
  paper: {
    '&.MuiAutocomplete-paper': {
      // backgroundColor: theme.palette.primary.main,
      margin: 0,
      padding: 0,
      width: '100%',
    },
    '& .MuiAutocomplete-noOptions': {
      color: '#B6B6B6',
      fontSize: 14,
    },
  },
}))(Autocomplete);

export const StyledAutoComplete = withStyles((theme) => ({
  popupIndicatorOpen: {
    transform: 'rotate(0deg)'
  },
  root: {
    '& .MuiFormControl-root ': {
      '& .MuiInput-underline:before': {
        // Semi-transparent underline
        // borderBottomColor: theme.palette.input.placeholder,
      },
      '& .MuiInput-underline:hover:before': {
        // Solid underline on hover
        // borderBottomColor: theme.palette.input.placeholder,
      },
      '& .MuiInput-underline:after': {
        // Solid underline on focus
        borderBottom: `1px solid ${theme.palette.input.stroke}`, // on step 1
      },
      '& .MuiInputBase-input': {
        // Text color
        color: theme.palette.text.main,
      },
    },
    '& .MuiAutocomplete-inputRoot[class*="MuiInput-root"] .MuiAutocomplete-input:first-child': {
      padding: 4.5, // not on step 1
    },
  },
  inputRoot: {
    '&.MuiOutlinedInput-root ': {
      borderRadius: 5,
      height: '45px',
    }, // not on step 1
    '&.MuiIconButton-root': {
      color: '#212529',
    },
    color: theme.palette.input.placeholder,
    fontWeight: 300,
    fontSize: 16,
    backgroundColor: 'inherit',
    '& input::placeholder': {
      color: theme.palette.input.placeholder,
      fontSize: 16,
      opacity: 1,
    },
    '&[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-child': {
      padding: '3.3px 0',
    },
    '&.MuiAutocomplete-inputRoot[class*="MuiOutlinedInput-root"]': {
      padding: '2px 8px 4px 8px',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
  },
  paper: {
    '&.MuiAutocomplete-paper': {
      // backgroundColor: theme.palette.input.main,
      backgroundColor: theme.palette.primary.main,
      margin: 0,
      borderRadius: 5,
      padding: 0,
      width: '100%',
    },
    '& .MuiAutocomplete-noOptions': {
      color: '#B6B6B6',
      fontSize: 14,
    },
  },
  listbox: {
    '&.MuiAutocomplete-listbox': {
      '&::-webkit-scrollbar': {
        width: '3px',
        height: '3px',
      },
      '&::-webkit-scrollbar-track': {
        boxShadow: 'inset 0 0 5px grey',
        borderRadius: '10px',
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#FFFFFF',
        borderRadius: '10px',
      },
    },
  },
  popupIndicator: {
    '&.MuiAutocomplete-popupIndicator': {
      color: '#B6B6B6',
      '& .MuiSvgIcon-root': {
        width: '0.8em',
      },
    },
  },
  option: {
    '&.MuiAutocomplete-option': {
      fontSize: 13,
      '&:hover': {
        backgroundColor: theme.palette.table.rowHover,
      },
      '&[aria-selected="true"]': {
        // color: theme.palette.text.main
        color: theme.palette.input.stroke,
        backgroundColor: theme.palette.primary.main,
        '&:hover': {
          backgroundColor: theme.palette.table.rowHover,
        },
      },
      '&[aria-selected="false"]': {
        color: theme.palette.input.label,
      },
    },
  },
  clearIndicator: {
    '&.MuiAutocomplete-clearIndicator': {
      color: '#B6B6B6',
      '& .MuiSvgIcon-fontSizeSmall': {
        width: '0.6em',
      },
    },
  },
}))(Autocomplete);