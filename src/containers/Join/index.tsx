import { ListOfNecessary } from '../ListOfNecessary';
import { HelpInform } from '../../components/HelpInform';
import { HelpMore } from '../../components/HelpMore';
import { Donor } from '../../components/Donor';
import { FirstAidKit } from '../../components/FirstAidKit';
import { Br } from '../../ui-kit/Br';
import { helpInformList } from './helpInform';
import { helpMoreList } from './helpMore';
import { donor } from './donor';
import { kit } from './firstAidKit';

const Join = () => {
  return (
    <>
      <ListOfNecessary />
      <Br desktop={100} mobile={20} />
      <HelpInform data={helpInformList} />
      <Br desktop={100} mobile={20} />
      <HelpMore data={helpMoreList} />
      <Br desktop={100} mobile={20} />
      <Donor data={donor} />
      <Br desktop={100} mobile={20} />
      <FirstAidKit data={kit} />
      <Br desktop={150} mobile={70} />
    </>
  );
};

export default Join;
