import { useState } from 'react';
import { useTranslation } from 'react-i18next';

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
} from './styles';
import { BlockListsProps } from '../../types/blockList';

export const BlockLists: React.FC<BlockListsProps> = ({ title, list }) => {
  const [isOpen, setIsOpen] = useState<number | null>(null);
  const { t } = useTranslation();

  const toggle = (index: number) => {
    if (isOpen === index) {
      return setIsOpen(null);
    }
    setIsOpen(index);
  };
  return (
    <Wrapper>
      <Container point={POINTS.m}>
        <Title>{t(`common:titles.${title}`)}</Title>
        <BlockListsContent>
          {list.map((item, ind) => (
            <BlockListsItem key={item.id}>
              <TopBlock $back={item.img}>
                <BlockTitle>{item.title}</BlockTitle>
              </TopBlock>
              <ListBlock>
                <List $isOpen={isOpen === ind}>
                  {item.list.map((item, i) => (
                    <ListItem key={item + i}>
                      <ListItemText>{item}</ListItemText>
                    </ListItem>
                  ))}
                </List>
                {item.list.length > 15 && (
                  <ReadMoreButton onClick={() => toggle(ind)}>
                    <ListItemText>{isOpen === ind ? 'Менше' : 'Читати далі'}</ListItemText>
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
