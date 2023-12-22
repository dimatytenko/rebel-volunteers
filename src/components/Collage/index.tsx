import { Wrapper, WrapperContent, ImageWrapper, Image } from './styles';

interface CollageProps {
  data: {
    id: string;
    img: string;
  }[];
}

export const Collage: React.FC<CollageProps> = ({ data }) => {
  return (
    <Wrapper>
      <WrapperContent>
        {data.map((item) => (
          <ImageWrapper key={item.id}>
            <Image src={item.img} />
          </ImageWrapper>
        ))}
      </WrapperContent>
    </Wrapper>
  );
};
