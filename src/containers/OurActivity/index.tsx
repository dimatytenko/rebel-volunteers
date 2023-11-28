import { OurActivityComponent } from '../../components/OurActivity';
import img_1 from './assets/img_1.jpg';
import img_2 from './assets/img_2.jpg';
import img_3 from './assets/img_3.jpg';

const data = [
  { id: '1', img: img_1 },
  {
    id: '2',
    img: img_2,
  },
  {
    id: '3',
    img: img_3,
  },
];

export const OurActivity = () => {
  return <OurActivityComponent data={data} />;
};
