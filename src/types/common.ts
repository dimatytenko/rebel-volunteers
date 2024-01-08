/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-expect-error
// eslint-disable-next-line import/named
import { TFunction } from 'react-i18next';

import { Language } from '../states/language';

export type CommonType = {
  lang: Language;
  isLoading?: boolean;
  t?: TFunction;
};
