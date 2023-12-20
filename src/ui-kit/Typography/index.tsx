import {
  StyledHeading1,
  StyledHeading2,
  StyledHeading3,
  StyledHeading3Bold,
  StyledHeading4,
  StyledHeading5,
  StyledText1Slim,
  StyledText1,
  StyledText2,
  StyledText2Bold,
  StyledText3Bold,
  StyledText4Slim,
} from './styles';
import { TextBaseProps } from './types';

export const Heading1: React.FC<TextBaseProps> = (props) => <StyledHeading1 {...props} />;
export const Heading2: React.FC<TextBaseProps> = (props) => <StyledHeading2 {...props} />;
export const Heading3: React.FC<TextBaseProps> = (props) => <StyledHeading3 {...props} />;
export const Heading3Bold: React.FC<TextBaseProps> = (props) => <StyledHeading3Bold {...props} />;
export const Heading4: React.FC<TextBaseProps> = (props) => <StyledHeading4 {...props} />;
export const Heading5: React.FC<TextBaseProps> = (props) => <StyledHeading5 {...props} />;
export const Text1: React.FC<TextBaseProps> = (props) => <StyledText1 {...props} />;
export const Text1Slim: React.FC<TextBaseProps> = (props) => <StyledText1Slim {...props} />;
export const Text2: React.FC<TextBaseProps> = (props) => <StyledText2 {...props} />;
export const Text2Bold: React.FC<TextBaseProps> = (props) => <StyledText2Bold {...props} />;
export const Text3Bold: React.FC<TextBaseProps> = (props) => <StyledText3Bold {...props} />;
export const Text4Slim: React.FC<TextBaseProps> = (props) => <StyledText4Slim {...props} />;
