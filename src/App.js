import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from 'Routes';
import { ThemeProvider } from '@mui/material/styles';
import theme from 'styles/theme';
import CssBaseline from '@mui/material/CssBaseline';
import Header from 'components/Header';

import ThemeContextProvider from './ThemeContext';

function App() {
  return (
    <>
      <ThemeContextProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <div style={{ background: '#bbdefb' }}>
              <Header />
              <AppRoutes />
            </div>
          </Router>
        </ThemeProvider>
      </ThemeContextProvider>
    </>
  );
}

export default App;
