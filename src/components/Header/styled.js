// Purpose: This component is for styling header
import { AppBar, Toolbar } from '@mui/material';
import styled from '@emotion/styled';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

export const AppNavBar = styled(AppBar)`
  height: 60px;
  display: flex;
  justify-content: center;
  color: #000;
  background: #bbdefb;
`;

export const ToolbarPadding = styled(Toolbar)`
  //padding: 0px !important;
`;

export const HeaderTabs = styled(Tabs)`
  & .MuiTabs-indicator {
    bottom: 5px;
  }
`;
export const HeaderTab = styled(Tab)`
  font-weight: 500;
  font-family: 'M PLUS 1';
  //font-size: 1rem;
  letter-spacing: 0.1em;
  color: inherit;
  line-height: 23px;
  text-align: center;
  //border: 1px solid white;
  min-height: 23px;
  font-size: 16px;
  text-transform: uppercase;
  // z-index: ${({ theme }) => theme.zIndex.modal - 1};
  &.Mui-selected {
    color: ${({ theme }) => theme.palette.secondary.main};
    //color: #64b5f6;
    opacity: 1;
  }
`;
