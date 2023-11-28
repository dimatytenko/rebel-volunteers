import { Hero } from '../Hero';
import { OurActivity } from '../OurActivity';
import { Team } from '../Team';
import { Br } from '../../ui-kit/Br';

export const Main = () => {
  return (
    <div>
      <Hero />
      <Br desktop={50} mobile={60} />
      <OurActivity />
      <Br desktop={150} mobile={60} />
      <Team />
      <Br desktop={150} mobile={60} />
    </div>
  );
};
