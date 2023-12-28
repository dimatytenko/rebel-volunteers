import { HeroComponent } from '../../components/Hero';
import { Directions } from '../../components/Directions';
import { Widget } from '../../components/Widget';
import { OurActivity } from '../OurActivity';
// import { Team } from '../Team';
import { Merch } from '../Merch';
import { OurSupport } from '../OurSupport';
import { Passed } from '../Passed';
import { Collection } from '../Collection';
import { Br } from '../../ui-kit/Br';
import { TeamComponent } from '../../components/Team';
import { useTeam } from '../../hooks/team';
import { useLanguage } from '../../hooks/language';

export const Main = () => {
  const { language } = useLanguage();
  const { team, isLoading: teamLoading } = useTeam();

  const isLoading = teamLoading;
  console.log('isLoading', isLoading);

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
      <TeamComponent team={team} lang={language} />
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
