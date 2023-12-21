import styled from 'styled-components';
import Drawer from 'rc-drawer';

export const StyledDrawer = styled(Drawer)`
  &.rc-drawer-content {
    background: ${({ theme }) => theme.palette.colors.primary};
  }
`;
export const DrowerContent = styled.div`
  margin-top: 108px;
  padding: 46px 16px 20px;
  border-top: 1px solid ${({ theme }) => theme.palette.colors.grey};
`;
