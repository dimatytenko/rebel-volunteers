import { HomeLink } from '../Button';
import { IconImage } from '../Icon/Image';

interface LogoProps {
  width?: string;
  height?: string;
}

export const Logo: React.FC<LogoProps> = ({ width, height, ...props }) => {
  return (
    <HomeLink>
      <IconImage type="logo" width={width} height={height} {...props} />
    </HomeLink>
  );
};
