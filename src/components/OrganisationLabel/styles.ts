import styled from 'styled-components';

import { Text3Bold } from '../../ui-kit/Typography';

export const Wrapper = styled.div`
  padding: 38px 72px;
  background-color: ${({ theme }) => theme.palette.colors.lightBlack};
`;

export const Content = styled.div`
  display: flex;
  gap: 30px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InfoTitle = styled(Text3Bold)`
  text-transform: capitalize;
`;
