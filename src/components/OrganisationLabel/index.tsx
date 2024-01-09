import {
  Wrapper,
  Content,
  InfoWrapper,
  InfoTitle,
  SocialWrapper,
  StyledLogo,
  LinksWrapper,
  DesktopWrapper,
  MobileWrapper,
} from './styles';
import { Social } from '../Social';
import { LinkText } from '../../ui-kit/Button';
import { OrganisationLabelProps } from '../../types/organisationLabel';

export const OrganisationLabel: React.FC<OrganisationLabelProps> = ({ links, t }) => {
  return (
    <Wrapper>
      <Content>
        <div>
          <StyledLogo />
        </div>
        <InfoWrapper>
          <InfoTitle>{t('common:titles.labelTitle')}</InfoTitle>
          <LinksWrapper>
            {links.map((item) => (
              <LinkText key={item.id} href={item.href}>
                {item.text}
              </LinkText>
            ))}
          </LinksWrapper>
          <SocialWrapper>
            <DesktopWrapper>
              <Social size={'medium'} />
            </DesktopWrapper>
            <MobileWrapper>
              <Social />
            </MobileWrapper>
          </SocialWrapper>
        </InfoWrapper>
      </Content>
    </Wrapper>
  );
};
