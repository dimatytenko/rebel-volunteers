import { HelpListProps } from '../../types/helpList';
import { Wrapper, Info, Title, InfoText } from './styles';

export const HelpList: React.FC<HelpListProps> = ({ data }) => {
  return (
    <Wrapper $back={data.img}>
      {data.list.map((item) => {
        return (
          <Info key={item.id}>
            <Title>{item.title}</Title>
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
