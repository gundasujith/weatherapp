import { createTheme } from '@mui/material/styles';

const primaryColor = '#000';
const secondaryColor = '#fff';

const theme = createTheme({
  palette: {
    text: {
      primary: primaryColor,
      secondary: secondaryColor
    },
    primary: {
      main: primaryColor,
      contrastText: secondaryColor
    },
    secondary: {
      main: secondaryColor,
      contrastText: primaryColor
    }
  },
  typography: {
    fontFamily: ['MPLUS1', 'Lora'].join(',')
    // fontWeightRegular: 350
  }
});

export default theme;
