import { IconSvg } from '../Icon/Svg';
import { DonateWrapper, RotateWrapper, StyledIcon, DonateWrapperPulsing, DonatePulsingButton } from './styles';

export const Donate = () => {
  return (
    <DonateWrapper>
      <RotateWrapper>
        <IconSvg type="donate" width="208" height="208" viewBox="0 0 208 208" />
      </RotateWrapper>
      <StyledIcon />
    </DonateWrapper>
  );
};

export const DonatePulsing = () => {
  return (
    <DonateWrapperPulsing>
      <DonatePulsingButton>
        <IconSvg type="donate" width="208" height="208" viewBox="0 0 208 208" />
        <StyledIcon />
      </DonatePulsingButton>
    </DonateWrapperPulsing>
  );
};
