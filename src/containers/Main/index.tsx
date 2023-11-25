import { Team } from '../Team';
import { Br } from '../../ui-kit/Br';

export const Main = () => {
  return (
    <div>
      <Br desktop={150} mobile={60} />
      <Team />
      <Br desktop={150} mobile={60} />
    </div>
  );
};
