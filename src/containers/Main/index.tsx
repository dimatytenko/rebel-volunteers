import { Hero } from '../Hero';
import { OurActivity } from '../OurActivity';
import { Team } from '../Team';
import { Br } from '../../ui-kit/Br';
import { Merch } from '../Merch';
import { Directions } from '../../components/Directions';
import { OurSupport } from '../OurSupport';

export const Main = () => {
  return (
    <div>
      <Hero />
      <Br desktop={100} mobile={60} />
      <OurActivity />
      <Br desktop={100} mobile={60} />
      <Directions />
      <Br desktop={150} mobile={60} />
      <Team />
      <Br desktop={150} mobile={60} />
      <Merch />
      <Br desktop={100} mobile={60} />
      <OurSupport />
      <Br desktop={150} mobile={60} />
    </div>
  );
};
