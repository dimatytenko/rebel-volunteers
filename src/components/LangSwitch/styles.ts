import styled from 'styled-components';

export const LangWrapper = styled.div`
  cursor: pointer;
  transition: ${({ theme }) => theme.transition.primary};

  &:hover {
    opacity: 0.8;
  }
`;
