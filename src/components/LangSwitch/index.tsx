import { LangWrapper, LangText } from './styles';
import { ISwitchLanguageProps } from '../../types/layout';
import { Language } from '../../states/language';

export const LangSwitch: React.FC<ISwitchLanguageProps> = ({ language, onChangeLanguage }) => {
  return (
    <LangWrapper onClick={onChangeLanguage}>
      <LangText>{language === Language.UK ? Language.EN : Language.UK}</LangText>
    </LangWrapper>
  );
};
