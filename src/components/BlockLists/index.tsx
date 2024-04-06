import { useState } from 'react';

import { Title } from '../../ui-kit/Title';
import { Container } from '../../ui-kit/Container';
import { POINTS } from '../../ui-kit/Container/types';
import {
  Wrapper,
  BlockListsContent,
  BlockListsItem,
  TopBlock,
  BlockTitle,
  ListBlock,
  List,
  ListItem,
  ListItemText,
  ReadMoreButton,
  Link,
} from './styles';
import { BlockListsProps } from '../../types/blockList';

export const BlockLists: React.FC<BlockListsProps> = ({ title, list, lang, isLoading, t, img }) => {
  const [isOpen, setIsOpen] = useState<number | null>(null);

  const toggle = (index: number) => {
    if (isOpen === index) {
      return setIsOpen(null);
    }
    setIsOpen(index);
  };

  if (!list || isLoading) return null;

  return (
    <Wrapper>
      <Container point={POINTS.m}>
        <Title>{t(`common:titles.${title}`)}</Title>
        <BlockListsContent>
          {list.map((item, ind) => (
            <BlockListsItem key={item.id}>
              <TopBlock $back={img[ind]}>
                <BlockTitle>{item[`title_${lang}`]}</BlockTitle>
              </TopBlock>
              <ListBlock>
                <List $isOpen={isOpen === ind}>
                  {item.items.map((item) => (
                    <ListItem key={item.id}>
                      <ListItemText>
                        {!item?.links?.length && item[`title_${lang}`]}
                        {item?.links?.length === 1 && (
                          <Link href={item.links[0]} target="_blank">
                            {item[`title_${lang}`]}
                          </Link>
                        )}
                        {item?.links?.length &&
                          item?.links?.length > 1 &&
                          item[`title_${lang}`].split('/').map((text, index) => (
                            <>
                              <Link key={index} href={item?.links?.[index]} target="_blank">
                                {index !== 0 ? '/' : ''}
                                {text}
                              </Link>
                            </>
                          ))}
                        {item.quantity ? ` - ${item.quantity}` : ''}
                      </ListItemText>
                    </ListItem>
                  ))}
                </List>
                {item.items.length > 15 && (
                  <ReadMoreButton onClick={() => toggle(ind)}>
                    <ListItemText>{isOpen === ind ? t('common:buttons.less') : t('common:buttons.more')}</ListItemText>
                  </ReadMoreButton>
                )}
              </ListBlock>
            </BlockListsItem>
          ))}
        </BlockListsContent>
      </Container>
    </Wrapper>
  );
};
