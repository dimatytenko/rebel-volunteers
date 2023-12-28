import { Text1 } from '../../ui-kit/Typography';
import { LangWrapper } from './styles';
import { ISwitchLanguageProps } from '../../types/layout';
import { Language } from '../../states/language';

export const LangSwitch: React.FC<ISwitchLanguageProps> = ({ language, onChangeLanguage }) => {
  return (
    <LangWrapper onClick={onChangeLanguage}>
      <Text1 $case="uppercase">{language === Language.UK ? Language.EN : Language.UK}</Text1>
    </LangWrapper>
  );
};
