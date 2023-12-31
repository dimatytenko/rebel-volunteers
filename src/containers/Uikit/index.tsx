import { Container } from '../../ui-kit/Container';
import { IconSvg } from '../../ui-kit/Icon/Svg';
import { Heading1, Heading2, Heading3, Heading5, Text1, Text2 } from '../../ui-kit/Typography';

export const Uikit = () => {
  return (
    <div style={{ backgroundColor: 'grey' }}>
      <Container>
        <div>Ui kit</div>
        <br />
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <IconSvg type="mail" width="26" height="21" viewBox="0 0 26 21" />
          <IconSvg type="mail" fill="primary" width="26" height="21" viewBox="0 0 26 21" />
          <IconSvg type="instagram" />
          <IconSvg type="instagram" fill="primary" />
          <IconSvg type="facebook" />
          <IconSvg type="facebook" fill="primary" />
          <IconSvg type="arrow" width="10" height="17" viewBox="0 0 10 17" fill="none" stroke="primary" />
          <IconSvg type="arrow" width="10" height="17" viewBox="0 0 10 17" fill="none" />
          <IconSvg type="arrow-short" width="17" height="17" viewBox="0 0 17 17" fill="none" stroke="primary" />
          <IconSvg type="arrow-short" width="17" height="17" viewBox="0 0 17 17" fill="none" stroke="secondary" />
          <IconSvg type="phone" width="19" height="18" viewBox="0 0 19 18" fill="primary" stroke="primary" />
          <IconSvg type="phone" width="19" height="18" viewBox="0 0 19 18" stroke="secondary" />
        </div>
        <br />
        <div>Typography</div>
        <Heading1 $case="uppercase">rebel volunteers</Heading1>
        <Heading1 $case="uppercase" $color="primary">
          rebel volunteers
        </Heading1>
        <Heading2 $case="uppercase">наша діяльність</Heading2>
        <Heading2 $case="uppercase" $color="primary">
          наша діяльність
        </Heading2>
        <br />
        <Heading3>Ми передали</Heading3>
        <Heading3 $color="primary">Ми передали</Heading3>
        <br />
        <Heading5>Військові</Heading5>
        <Heading5 $color="primary">Військові</Heading5>
        <Text1>Ми надаємо продукти та необхідні речі для людей чиє житло було зруйновано або пошкоджено.</Text1>
        <Text1 $color="primary">
          Ми надаємо продукти та необхідні речі для людей чиє житло було зруйновано або пошкоджено.
        </Text1>
        <Text2>Ціль: 200 000 грн</Text2>
        <Text2 $color="primary">Ціль: 200 000 грн</Text2>

        <br />
      </Container>
    </div>
  );
};
