import { HeroComponent } from '../../components/Hero';
import { Directions } from '../../components/Directions';
import { Widget } from '../../components/Widget';
import { OurActivity } from '../OurActivity';
import { Team } from '../Team';
import { Merch } from '../Merch';
import { OurSupport } from '../OurSupport';
import { Passed } from '../Passed';
import { Collection } from '../Collection';
import { Br } from '../../ui-kit/Br';

export const Main = () => {
  return (
    <>
      <HeroComponent />
      <Br desktop={100} mobile={20} />
      <OurActivity />
      <Br desktop={100} mobile={20} />
      <Collection />
      <Br desktop={150} mobile={70} />
      <Passed />
      <Br desktop={100} mobile={20} />
      <Directions />
      <Br desktop={150} mobile={20} />
      <Team />
      <Br desktop={150} mobile={70} />
      <Merch />
      <Br desktop={100} mobile={20} />
      <OurSupport />
      <Br desktop={150} mobile={70} />
      <Widget />
      <Br desktop={170} mobile={70} />
    </>
  );
};
