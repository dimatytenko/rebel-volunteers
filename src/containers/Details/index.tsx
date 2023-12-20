import { DetailsComponent } from '../../components/Details';
import { SOCIAL } from '../../constants/links';
import mono from './assets/mono.png';
import paypal from './assets/paypal.png';
import privat from './assets/privat.png';
import pumb from './assets/pumb.png';
import img from './assets/img.jpg';

const links = [
  { id: '1', href: SOCIAL.phone.href, text: SOCIAL.phone.text2 },
  { id: '2', href: SOCIAL.mail, text: SOCIAL.mail.split(':')[1] },
];

const details = {
  img: img,
  data: [
    { id: '1', name: 'Mono', img: mono, details: [{ number: '4441 1144 5848 4696' }] },
    { id: '2', name: 'PayPal', img: paypal, details: [{ number: 'rebelvolmyko@gmail.com' }] },
    { id: '3', name: 'Приватбанк', img: privat, details: [{ number: 'UA063052990000026000001710109' }] },
    {
      id: '4',
      name: 'ПУМБ',
      img: pumb,
      details: [
        { prev: 'uah', number: 'UA253348510000000026006178855' },
        { prev: 'usd', number: 'UA253348510000000026006178855' },
        { prev: 'eur', number: 'UA373348510000000002603140250' },
      ],
    },
  ],
};

export const Details = () => {
  return <DetailsComponent links={links} data={details} />;
};
