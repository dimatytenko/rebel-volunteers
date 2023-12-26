import { Br } from '../../ui-kit/Br';
import { OveralResult } from '../OveralResult';
import { SpeakAboutUs } from '../SpeakAboutUs';
import { MainSliderSection } from '../../components/MainSliderSection';
import { gratitudes } from '../Gratitudes';
import { chevrones } from '../Chevrones';

export const Reports = () => {
  return (
    <>
      <OveralResult />
      <Br desktop={100} mobile={20} />
      <SpeakAboutUs />
      <Br desktop={100} mobile={20} />

      <Br desktop={100} mobile={20} />
      <MainSliderSection title="Подяки" data={gratitudes} height={242} />
      <Br desktop={100} mobile={20} />
      <MainSliderSection title="Шеврони" data={chevrones} height={174} />
      <Br desktop={100} mobile={20} />
    </>
  );
};
