import { atom } from 'recoil';

export enum Language {
  EN = 'en',
  UK = 'uk',
}

export const LanguageState = atom<Language>({
  key: 'language',
  default: Language.UK,
});
