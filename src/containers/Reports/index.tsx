import { useTranslation } from 'react-i18next';

import { useLanguage } from '../../hooks/language';
import { Br } from '../../ui-kit/Br';
import { BlockLists } from '../../components/BlockLists';
import { SpeakAboutUsComponent } from '../../components/SpeakAboutUs';
import { MainSliderSection } from '../../components/MainSliderSection';
import { ReportsSlider } from '../../components/ReportsSlider';
import { Loader } from '../../ui-kit/Loader';
import { useOveral } from '../../hooks/overal';
import { usePhotoVideo } from '../../hooks/photoVideo';
import { useNews } from '../../hooks/news';
import { useThanks } from '../../hooks/thanks';
import { useChevrones } from '../../hooks/chevrones';
import img_1 from './assets/overal/img_1.jpg';
import img_2 from './assets/overal/img_2.jpg';
import img_3 from './assets/overal/img_3.jpg';

const Reports = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const { overal, isLoading: overalLoading } = useOveral();
  const { photoVideo, isLoading: photoVideoLoading } = usePhotoVideo();
  const { news, isLoading: newsLoading } = useNews();
  const { thanks, isLoading: thanksLoading } = useThanks();
  const { chevrones, isLoading: chevronesLoading } = useChevrones();

  const isLoading = overalLoading || photoVideoLoading || newsLoading || thanksLoading || chevronesLoading;

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <BlockLists
        title="overall"
        list={overal}
        lang={language}
        isLoading={isLoading}
        t={t}
        img={[img_1, img_2, img_3]}
      />
      <Br desktop={100} mobile={20} />
      <ReportsSlider title="photoVideo" data={photoVideo} isLoading={isLoading} lang={language} t={t} />
      <Br desktop={100} mobile={20} />
      <SpeakAboutUsComponent data={news} isLoading={isLoading} lang={language} t={t} />
      <Br desktop={100} mobile={20} />
      <MainSliderSection title="grattitude" data={thanks} isLoading={isLoading} height={242} lang={language} t={t} />
      <Br desktop={100} mobile={20} />
      <MainSliderSection title="chevrons" data={chevrones} isLoading={isLoading} height={174} lang={language} t={t} />
      <Br desktop={100} mobile={20} />
    </>
  );
};

export default Reports;
