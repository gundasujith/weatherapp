import React from 'react';
import { PageContainer, ChildContainer } from './styled';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <>
      <PageContainer>
        <Box>
          <ChildContainer>{children}</ChildContainer>
        </Box>
      </PageContainer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.any
};
export default Layout;
