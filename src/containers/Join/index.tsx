import { useTranslation } from 'react-i18next';

import { BlockLists } from '../../components/BlockLists';
import { HelpInform } from '../../components/HelpInform';
import { HelpMore } from '../../components/HelpMore';
import { Donor } from '../../components/Donor';
import { FirstAidKit } from '../../components/FirstAidKit';
import { Br } from '../../ui-kit/Br';
import { helpInformList } from './helpInform';
import { helpMoreList } from './helpMore';
import { donor } from './donor';
import { kit } from './firstAidKit';
import { list } from '../ListOfNecessary';
import { useLanguage } from '../../hooks/language';

const Join = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();

  return (
    <>
      <BlockLists title="necessary" lang={language} list={list} t={t} />
      <Br desktop={100} mobile={20} />
      <HelpInform data={helpInformList} lang={language} t={t} />
      <Br desktop={100} mobile={20} />
      <HelpMore data={helpMoreList} lang={language} t={t} />
      <Br desktop={100} mobile={20} />
      <Donor data={donor} lang={language} t={t} />
      <Br desktop={100} mobile={20} />
      <FirstAidKit data={kit} lang={language} t={t} />
      <Br desktop={150} mobile={70} />
    </>
  );
};

export default Join;
