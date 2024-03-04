import { useTranslation } from 'react-i18next';

import { useLanguage } from '../../hooks/language';
import { DetailsComponent } from '../../components/Details';
import { Collage } from '../../components/Collage';
import { SOCIAL } from '../../constants/links';
import { Br } from '../../ui-kit/Br';
import mono from './assets/mono.png';
import paypal from './assets/paypal.png';
import privat from './assets/privat.png';
import pumb from './assets/pumb.png';
import img from './assets/img.jpg';
import img_1 from './assets/collage/img_1.jpg';
import img_2 from './assets/collage/img_2.jpg';
import img_3 from './assets/collage/img_3.jpg';
import img_4 from './assets/collage/img_4.jpg';
import img_5 from './assets/collage/img_5.jpg';
import img_6 from './assets/collage/img_6.jpg';

export const links = [
  { id: '1', href: SOCIAL.phone.href, text: SOCIAL.phone.text2 },
  { id: '2', href: SOCIAL.mail, text: SOCIAL.mail.split(':')[1] },
];

export const details = {
  img: img,
  data: {
    uk: [
      { id: '1', name: 'Mono:', img: mono, details: [{ number: '4441 1144 5848 4696' }] },
      { id: '2', name: 'PayPal:', img: paypal, details: [{ number: 'rebelvolmyko@gmail.com' }] },
      { id: '3', name: 'Приватбанк:', img: privat, details: [{ number: 'UA063052990000026000001710109' }] },
      {
        id: '4',
        name: 'ПУМБ:',
        img: pumb,
        details: [
          { prev: 'uah', number: 'UA253348510000000026006178855' },
          { prev: 'usd', number: '5355280015075979' },
          { prev: 'eur', number: 'UA373348510000000002603140250' },
        ],
      },
    ],
    en: [
      { id: '1', name: 'Mono:', img: mono, details: [{ number: '4441 1144 5848 4696' }] },
      { id: '2', name: 'PayPal:', img: paypal, details: [{ number: 'rebelvolmyko@gmail.com' }] },
      { id: '3', name: 'PrivatBank:', img: privat, details: [{ number: 'UA063052990000026000001710109' }] },
      {
        id: '4',
        name: 'PUMB:',
        img: pumb,
        details: [
          { prev: 'uah', number: 'UA253348510000000026006178855' },
          { prev: 'usd', number: '5355280015075979' },
          { prev: 'eur', number: 'UA373348510000000002603140250' },
        ],
      },
    ],
  },
};

const collageData = [
  { id: '1', img: img_1 },
  {
    id: '2',
    img: img_2,
  },
  {
    id: '3',
    img: img_3,
  },
  {
    id: '4',
    img: img_4,
  },
  {
    id: '5',
    img: img_5,
  },
  {
    id: '6',
    img: img_6,
  },
];

const Details = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();

  return (
    <>
      <DetailsComponent links={links} data={details} lang={language} t={t} />
      <Br desktop={150} mobile={70} />
      <Collage data={collageData} />
      <Br desktop={150} mobile={70} />
    </>
  );
};

export default Details;
