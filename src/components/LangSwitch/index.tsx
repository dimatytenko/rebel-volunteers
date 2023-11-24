import { useState } from 'react';

import { Text1 } from '../../ui-kit/Typography';
import { LangWrapper } from './styles';

enum LANG {
  uk = 'uk',
  en = 'en',
}

export const LangSwitch = () => {
  const [lang, setLang] = useState<LANG>(LANG.uk);

  const changeLang = () => {
    if (lang === LANG.uk) {
      setLang(LANG.en);
    } else {
      setLang(LANG.uk);
    }
  };

  return (
    <LangWrapper onClick={changeLang}>
      <Text1 $case="uppercase">{lang === LANG.uk ? LANG.en : LANG.uk}</Text1>
    </LangWrapper>
  );
};
