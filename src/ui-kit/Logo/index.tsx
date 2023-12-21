import { HomeLink } from '../Button';
import { IconImage } from '../Icon/Image';

interface LogoProps {
  width?: string;
  height?: string;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({ width, height, onClick, ...props }) => {
  return (
    <HomeLink onClick={onClick}>
      <IconImage type="logo" width={width} height={height} {...props} />
    </HomeLink>
  );
};
