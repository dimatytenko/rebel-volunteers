import { Container } from '../../ui-kit/Container';
import { IconSvg } from '../../ui-kit/Icon/Svg';

export const Uikit = () => {
  return (
    <div style={{ backgroundColor: 'grey' }}>
      <Container>
        <div>Ui kit</div>
        <br />
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <IconSvg type="mail" width="26" height="21" viewBox="0 0 26 21" />
          <IconSvg type="mail" fill="black" width="26" height="21" viewBox="0 0 26 21" />
          <IconSvg type="instagram" />
          <IconSvg type="instagram" fill="black" />
          <IconSvg type="facebook" />
          <IconSvg type="facebook" fill="black" />
          <IconSvg type="arrow" width="10" height="17" viewBox="0 0 10 17" fill="none" stroke="black" />
          <IconSvg type="arrow" width="10" height="17" viewBox="0 0 10 17" fill="none" />
          <IconSvg type="arrow-short" width="17" height="17" viewBox="0 0 17 17" fill="none" stroke="black" />
          <IconSvg type="arrow-short" width="17" height="17" viewBox="0 0 17 17" fill="none" stroke="secondary" />
          <IconSvg type="phone" width="19" height="18" viewBox="0 0 19 18" fill="black" stroke="black" />
          <IconSvg type="phone" width="19" height="18" viewBox="0 0 19 18" stroke="secondary" />
        </div>

        <br />
      </Container>
    </div>
  );
};
