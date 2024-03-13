import { useState } from 'react';

import {
  DetailsWrapper,
  ImageWrapper,
  StyledImage,
  LeftContent,
  Title,
  DetailsItem,
  DetailImageWrapper,
  DetailImage,
  DetailInfo,
  DetailTitle,
  DetailNumber,
  DetailPrev,
  DetailNumberWrapper,
  CppyIconWrapper,
  CopyIcon,
  NumbersWrapper,
  StyledLine,
  ImageMobileWrapper,
  StyledLineMobile,
} from './styles';
import { DetailsBlockProps } from '../../types/detailsBlock';
import { useCopyToClipboard } from '../../hooks/copyToClipboard';

export const DetailsBlock: React.FC<DetailsBlockProps> = ({ data, t, lang }) => {
  const { copied, copy, text, contextHolder } = useCopyToClipboard(10000);
  const [copyId, setCopyId] = useState<number | null>(null);

  const handleCopy = (id: number, text: string) => {
    copy(text);
    setCopyId(id);
  };

  return (
    <DetailsWrapper>
      {contextHolder}
      <LeftContent>
        <Title>{t('common:titles.details')}:</Title>
        <ImageMobileWrapper>
          <StyledImage src={data.img} alt="image" />
        </ImageMobileWrapper>
        <div>
          {data.data[lang].map((item, ind, arr) => (
            <div key={item.id}>
              <>{ind !== 0 && <StyledLine />}</>
              <DetailsItem>
                <DetailImageWrapper>
                  <DetailImage src={item.img} alt={item.name} />
                </DetailImageWrapper>
                <DetailInfo>
                  <DetailTitle>{item.name}</DetailTitle>
                  <NumbersWrapper>
                    {item.details.map((detail, i) => (
                      <DetailNumberWrapper key={detail.number + detail.prev}>
                        <>{detail?.prev && <DetailPrev>{detail.prev}:</DetailPrev>}</>
                        <DetailNumber>{detail.number}</DetailNumber>
                        <CppyIconWrapper onClick={() => handleCopy(i, detail.number)}>
                          <CopyIcon fill={copied && copyId === i && text === detail.number ? 'green' : 'secondary'} />
                        </CppyIconWrapper>
                      </DetailNumberWrapper>
                    ))}
                  </NumbersWrapper>
                </DetailInfo>
              </DetailsItem>
              <StyledLineMobile>{ind === arr.length - 1 && <StyledLine />}</StyledLineMobile>
            </div>
          ))}
        </div>
      </LeftContent>
      <ImageWrapper>
        <StyledImage src={data.img} alt="image" />
      </ImageWrapper>
    </DetailsWrapper>
  );
};
