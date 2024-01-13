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
// import { list } from '../ListOfNecessary';
import { useLanguage } from '../../hooks/language';
import { useOveral } from '../../hooks/overal';
import img_1 from './assets/necessary/img_1.jpg';
import img_2 from './assets/necessary/img_2.jpg';
import img_3 from './assets/necessary/img_3.jpg';

const Join = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const { overal } = useOveral();

  return (
    <>
      <BlockLists title="necessary" list={overal} lang={language} t={t} img={[img_1, img_2, img_3]} />
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
