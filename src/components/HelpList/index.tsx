import { HelpListProps } from '../../types/helpList';
import { Wrapper, Info, Title, InfoText } from './styles';

export const HelpList: React.FC<HelpListProps> = ({ data, t }) => {
  return (
    <Wrapper $back={data.img}>
      {data.list.map((item) => {
        return (
          <Info key={item.id}>
            <Title>{t(`common:contacts.${item.title}`)}</Title>
            <>
              {item.info.map((item) => {
                return <InfoText key={item}>{item}</InfoText>;
              })}
            </>
          </Info>
        );
      })}
    </Wrapper>
  );
};
