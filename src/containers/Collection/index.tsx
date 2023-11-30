import { CollectionComponent } from '../../components/Collection';
import img from './assets/img.png';

const data = {
  aim: '200 000',
  description: 'У нас черговий збір на Mavic 3T для бригади НГУ "Червона Калина", що працюють на півдні!',
  img,
};

export const Collection = () => {
  return <CollectionComponent data={data} />;
};
