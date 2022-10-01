import styled from '@emotion/styled';
import Box from '@mui/material/Box';

export const MainBox = styled(Box)`
  min-height: calc(100vh - 60px);
  display: grid;
  justify-content: center;
  align-content: center;
`;
export const SectionBox = styled(Box)`
  width: 80vw;
  max-width: 620px;
  //border: 0px solid red;
  padding: 0.5rem;
  background: ${({ theme }) => theme.palette.secondary.main};
`;

export const ImageContainer = styled(Box)`
  width: 200px;
  height: 150px;
`;
export const TempBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
`;
export const Image = styled('img')`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;
