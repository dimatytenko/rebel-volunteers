import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-expect-error
import i18next from '../utils/i18next';
import { LanguageState, Language } from '../states/language';

export const useLanguage = () => {
  const [language, setLanguage] = useRecoilState(LanguageState);
  const onChangeLanguage = () => {
    const lang = language === Language.EN ? Language.UK : Language.EN;
    setLanguage(lang);
    i18next.changeLanguage(lang, (err: Error | null) => {
      if (err) return console.log('something went wrong loading', err);
    });
  };

  useEffect(() => {
    const language = localStorage.getItem('i18nextLng') as Language;
    if (language) {
      setLanguage(language);
    } else {
      setLanguage(Language.UK);
    }
  }, []);

  return { language, onChangeLanguage };
};
