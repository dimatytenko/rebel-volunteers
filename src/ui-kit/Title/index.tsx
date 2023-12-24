import { StyledTitle } from './styles';
import { WithChildren } from '../../types/helpers';

interface TitleProps {}

export const Title: React.FC<TitleProps & WithChildren> = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};
