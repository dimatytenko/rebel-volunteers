import { HeroComponent } from '../../components/Hero';
import { Directions } from '../../components/Directions';
import { OurActivityComponent } from '../../components/OurActivity';
import { CollectionComponent } from '../../components/Collection';
import { TeamComponent } from '../../components/Team';
import { Widget } from '../../components/Widget';
import { Merch } from '../Merch';
import { OurSupport } from '../OurSupport';
import { Passed } from '../Passed';
import { Br } from '../../ui-kit/Br';
import { useLanguage } from '../../hooks/language';
import { useTeam } from '../../hooks/team';
import { useHero } from '../../hooks/hero';
import { useOurActivity } from '../../hooks/ourActivity';
import { useCollection } from '../../hooks/collection';

const Main = () => {
  const { language } = useLanguage();
  const { team, isLoading: teamLoading } = useTeam();
  const { hero, isLoading: heroLoading } = useHero();
  const { ourActivity, isLoading: activityLoading } = useOurActivity();
  const { collection, isLoading: collectionLoading } = useCollection();

  const isLoading = teamLoading || heroLoading || activityLoading || collectionLoading;
  console.log('isLoading', isLoading);

  return (
    <>
      <HeroComponent data={hero} lang={language} />
      <Br desktop={100} mobile={20} />
      <OurActivityComponent data={ourActivity} lang={language} />
      <Br desktop={100} mobile={20} />
      <CollectionComponent data={collection} lang={language} />
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

export default Main;
