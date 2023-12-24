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
} from './styles';

interface BlockListsProps {
  title: string;
  list: {
    id: string;
    img: string;
    title: string;
    list: string[];
  }[];
}

export const BlockLists: React.FC<BlockListsProps> = ({ title, list }) => {
  const [isOpen, setIsOpen] = useState<number | null>(null);

  const toggle = (index: number) => {
    if (isOpen === index) {
      return setIsOpen(null);
    }
    setIsOpen(index);
  };
  return (
    <Wrapper>
      <Container point={POINTS.m}>
        <Title>{title}</Title>
        <BlockListsContent>
          {list.map((item, ind) => (
            <BlockListsItem key={item.id}>
              <TopBlock back={item.img}>
                <BlockTitle>{item.title}</BlockTitle>
              </TopBlock>
              <ListBlock>
                <List isOpen={isOpen === ind}>
                  {item.list.map((item) => (
                    <ListItem key={item}>
                      <ListItemText>{item}</ListItemText>
                    </ListItem>
                  ))}
                </List>
                <ReadMoreButton onClick={() => toggle(ind)}>
                  <ListItemText>{isOpen === ind ? 'Менше' : 'Читати далі'}</ListItemText>
                </ReadMoreButton>
              </ListBlock>
            </BlockListsItem>
          ))}
        </BlockListsContent>
      </Container>
    </Wrapper>
  );
};
