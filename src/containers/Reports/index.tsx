import { useTranslation } from 'react-i18next';

import { useLanguage } from '../../hooks/language';
import { Br } from '../../ui-kit/Br';
import { BlockLists } from '../../components/BlockLists';
import { SpeakAboutUsComponent } from '../../components/SpeakAboutUs';
import { MainSliderSection } from '../../components/MainSliderSection';
import { ReportsSlider } from '../../components/ReportsSlider';
import { gratitudes } from '../Gratitudes';
import { chevrones } from '../Chevrones';
import { reports } from '../ReportsSlider';
import { overal } from '../OveralResult';
import { aboutUs } from '../SpeakAboutUs';

const Reports = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();

  return (
    <>
      <BlockLists title="overall" list={overal} lang={language} t={t} />
      <Br desktop={100} mobile={20} />
      <ReportsSlider title="photoVideo" data={reports} lang={language} t={t} />
      <Br desktop={100} mobile={20} />
      <SpeakAboutUsComponent data={aboutUs} lang={language} t={t} />
      <Br desktop={100} mobile={20} />
      <MainSliderSection title="grattitude" data={gratitudes} height={242} lang={language} t={t} />
      <Br desktop={100} mobile={20} />
      <MainSliderSection title="chevrons" data={chevrones} height={174} lang={language} t={t} />
      <Br desktop={100} mobile={20} />
    </>
  );
};

export default Reports;
