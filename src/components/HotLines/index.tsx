import { HotlinesProps } from '../../types/hotLines';
import { Wrapper, InfoItem, Title, Info, InfoText } from './styles';

export const Hotlines: React.FC<HotlinesProps> = ({ list, t, lang }) => {
  console.log('lang', lang);
  return (
    <Wrapper>
      {list.map((item) => {
        return (
          <InfoItem key={item.id} $back={item.img}>
            <Title>{t(`common:contacts.${item.title}`)}</Title>
            <Info>
              {item.info[lang].map((item) => {
                return <InfoText key={item}>{item}</InfoText>;
              })}
            </Info>
          </InfoItem>
        );
      })}
    </Wrapper>
  );
};
