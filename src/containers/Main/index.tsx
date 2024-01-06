import { HeroComponent } from '../../components/Hero';
import { Directions } from '../../components/Directions';
import { OurActivityComponent } from '../../components/OurActivity';
import { CollectionComponent } from '../../components/Collection';
import { TeamComponent } from '../../components/Team';
import { MerchComponent } from '../../components/Merch';
import { Widget } from '../../components/Widget';
import { OurSupportComponent } from '../../components/OurSupport';
import { PassedComponents } from '../../components/Passed';
import { Br } from '../../ui-kit/Br';
import { useLanguage } from '../../hooks/language';
import { useTeam } from '../../hooks/team';
import { useHero } from '../../hooks/hero';
import { useOurActivity } from '../../hooks/ourActivity';
import { useCollection } from '../../hooks/collection';
import { useMerch } from '../../hooks/merch';
import { useSupport } from '../../hooks/ourSupport';
import { useReports } from '../../hooks/reports';

const Main = () => {
  const { language } = useLanguage();
  const { team, isLoading: teamLoading } = useTeam();
  const { hero, isLoading: heroLoading } = useHero();
  const { ourActivity, isLoading: activityLoading } = useOurActivity();
  const { collection, isLoading: collectionLoading } = useCollection();
  const { merch, isLoading: merchLoading } = useMerch();
  const { support, isLoading: supportLoading } = useSupport();
  const { reports, isLoading: reportsLoading } = useReports();

  const isLoading =
    teamLoading ||
    heroLoading ||
    activityLoading ||
    collectionLoading ||
    merchLoading ||
    supportLoading ||
    reportsLoading;
  console.log('isLoading', isLoading);

  return (
    <>
      <HeroComponent data={hero} lang={language} />
      <Br desktop={100} mobile={20} />
      <OurActivityComponent data={ourActivity} lang={language} />
      <Br desktop={100} mobile={20} />
      <CollectionComponent data={collection} lang={language} />
      <Br desktop={150} mobile={70} />
      <PassedComponents data={reports} lang={language} />
      <Br desktop={100} mobile={20} />
      <Directions />
      <Br desktop={150} mobile={20} />
      <TeamComponent team={team} lang={language} />
      <Br desktop={150} mobile={70} />
      <MerchComponent data={merch} lang={language} />
      <Br desktop={100} mobile={20} />
      <OurSupportComponent data={support} lang={language} />
      <Br desktop={150} mobile={70} />
      <Widget />
      <Br desktop={170} mobile={70} />
    </>
  );
};

export default Main;
