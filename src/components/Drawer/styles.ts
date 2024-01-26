import styled from 'styled-components';
import Drawer from 'rc-drawer';

import { LinkButton } from '../../ui-kit/Button';

export const StyledDrawer = styled(Drawer)`
  &.rc-drawer-content {
    background: ${({ theme }) => theme.palette.colors.primary};
  }
`;
export const DrowerContent = styled.div`
  margin-top: 108px;
  padding: 0px 16px 20px;
`;

export const Wrapper = styled.div`
  margin-top: 30px;
`;

export const StyledLinkButton = styled(LinkButton)`
  width: 100%;
  justify-content: center;
`;

export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background: radial-gradient(50% 50% at 50% 50%, #fff 0%, rgba(217, 217, 217, 0) 100%);
`;
