import styled from 'styled-components';

export const LangWrapper = styled.div`
  cursor: pointer;
  transition: opacity ${({ theme }) => theme.transition.primary};

  &:hover {
    opacity: 0.8;
  }
`;
