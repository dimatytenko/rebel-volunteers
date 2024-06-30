import styled, { keyframes } from 'styled-components';

export const LoaderWrapper = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const LoaderIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 4px solid ${({ theme }) => theme.palette.colors.red};
  border-top-color: transparent;
  animation: ${spin} 1s linear infinite;
`;
