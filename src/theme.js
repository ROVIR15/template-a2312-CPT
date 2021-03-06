import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
let theme = createMuiTheme({
  palette: {
    primary: {
      main: '#005BAB',
    },
    secondary: {
      main: '#E5B122',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
