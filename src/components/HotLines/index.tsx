import { HotlinesProps } from './types';
import { Wrapper, InfoItem, Title, Info, InfoText } from './styles';

export const Hotlines: React.FC<HotlinesProps> = ({ list }) => {
  return (
    <Wrapper>
      {list.map((item) => {
        return (
          <InfoItem key={item.id} $back={item.img}>
            <Title>{item.title}</Title>
            <Info>
              {item.info.map((item) => {
                return <InfoText key={item}>{item}</InfoText>;
              })}
            </Info>
          </InfoItem>
        );
      })}
    </Wrapper>
  );
};
