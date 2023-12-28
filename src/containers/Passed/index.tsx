import { useTranslation } from 'react-i18next';

import { PassedComponents } from '../../components/Passed';
import img_1 from './assets/img_1.jpg';
import img_2 from './assets/img_2.jpg';
import img_3 from './assets/img_3.jpg';
import img_4 from './assets/img_4.jpg';
import img_5 from './assets/img_5.jpg';

export const Passed = () => {
  const { t } = useTranslation();

  const data = [
    {
      id: '1',
      title: `${t('common:titles.reports')}`,
      subtitle: 'Ми передали',
    },
    {
      id: '2',
    },
    {
      id: '3',
      img: img_1,
      count: 966,
      descr: 'Комплектів форми',
    },
    {
      id: '4',
      img: img_2,
      count: 6505,
      descr: 'Одиниць амуніції',
    },
    {
      id: '5',
      img: img_3,
      count: 1467,
      descr: 'Одиниць аптечок',
    },
    {
      id: '6',
    },
    {
      id: '7',
    },
    {
      id: '8',
      img: img_4,
      count: 497,
      descr: 'Бронежилетів',
    },
    {
      id: '9',
      img: img_5,
      count: 5,
      descr: 'Авто',
    },
  ];

  return <PassedComponents data={data} />;
};
