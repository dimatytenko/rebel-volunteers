import { Team } from '../Team';
import { Br } from '../../ui-kit/Br';
import { Hero } from '../Hero';

export const Main = () => {
  return (
    <div>
      <Hero />
      <Br desktop={150} mobile={60} />
      <Team />
      <Br desktop={150} mobile={60} />
    </div>
  );
};
