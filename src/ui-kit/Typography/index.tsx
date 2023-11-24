import {
  StyledHeading1,
  StyledHeading2,
  StyledHeading3,
  StyledHeading4,
  StyledHeading5,
  StyledText1,
  StyledText2,
} from './styles';
import { TextBaseProps } from './types';

export const Heading1: React.FC<TextBaseProps> = (props) => <StyledHeading1 {...props} />;
export const Heading2: React.FC<TextBaseProps> = (props) => <StyledHeading2 {...props} />;
export const Heading3: React.FC<TextBaseProps> = (props) => <StyledHeading3 {...props} />;
export const Heading4: React.FC<TextBaseProps> = (props) => <StyledHeading4 {...props} />;
export const Heading5: React.FC<TextBaseProps> = (props) => <StyledHeading5 {...props} />;
export const Text1: React.FC<TextBaseProps> = (props) => <StyledText1 {...props} />;
export const Text2: React.FC<TextBaseProps> = (props) => <StyledText2 {...props} />;
