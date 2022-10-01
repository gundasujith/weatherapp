// This component is for setting up the routing for Home, DashBoard and Datasets header
import Grid from '@mui/material/Grid';
import { AppNavBar, HeaderTab, ToolbarPadding, HeaderTabs } from './styled';
import logo2 from '../Img/logo2.png';
import { Link } from 'react-router-dom';
import * as React from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../ThemeContext';
const Header = () => {
  const { handleChange, value } = useContext(ThemeContext);

  return (
    <>
      <AppNavBar position="static" elevation={0}>
        <ToolbarPadding>
          <Grid
            container
            sx={{
              height: '60px',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '90vw',
              margin: '0 auto',
              maxWidth: '1170px',
              border: '0px solid red'
            }}>
            <Grid item>
              <img
                src={logo2}
                style={{
                  width: '126px',
                  height: '32px',
                  // border: '1px solid black',
                  objectFit: 'cover'
                }}
              />
            </Grid>
            <Grid item>
              <HeaderTabs value={value} onChange={handleChange} indicatorColor="primary">
                <HeaderTab label="Toronto" value="toronto" component={Link} to={'/'} />
                <HeaderTab label="Ottawa" value="ottawa" component={Link} to={'/ottawa'} />
                <HeaderTab label="Montreal" value="montreal" component={Link} to={'/montreal'} />
              </HeaderTabs>
            </Grid>
          </Grid>
        </ToolbarPadding>
      </AppNavBar>
    </>
  );
};

export default Header;
