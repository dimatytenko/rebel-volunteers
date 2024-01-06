import { useTranslation } from 'react-i18next';

import { Wrapper, Title } from './styles';
import { Container } from '../../ui-kit/Container';
import { POINTS } from '../../ui-kit/Container/types';

interface WidgetProps {
  isLoading: boolean;
}

export const Widget: React.FC<WidgetProps> = ({ isLoading }) => {
  const { t } = useTranslation();

  if (isLoading) return null;

  return (
    <Wrapper>
      <Container point={POINTS.m}>
        <Title>{t('common:titles.instagram')}</Title>
        <div className="elfsight-app-53648f7a-8373-400e-94d2-a9a3ec4e5c83" data-elfsight-app-lazy></div>
      </Container>
    </Wrapper>
  );
};
