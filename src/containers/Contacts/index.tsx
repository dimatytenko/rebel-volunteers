import { useTranslation } from 'react-i18next';

import { useLanguage } from '../../hooks/language';
import { ContactsComponent } from '../../components/Contacts';
import { links } from '../Details';
import img_1 from './assets/img_1.jpg';
import img_2 from './assets/img_2.jpg';
import img_3 from './assets/img_3.jpg';
import help_back from './assets/help_back.jpg';

const hotLines = [
  {
    id: '1',
    title: 'low',
    img: img_1,
    info: {
      en: ['(0512)53-13-31', '(0512)40-94-89', '(0512)53-12-71', '(0512)34-11-98'],
      uk: ['(0512)53-13-31', '(0512)40-94-89', '(0512)53-12-71', '(0512)34-11-98'],
    },
  },
  {
    id: '2',
    title: 'municipal',
    img: img_2,
    info: {
      en: ['(0512)37-24-48', '(0512)37-24-65', '(0512)37-24-38'],
      uk: ['(0512)37-24-48', '(0512)37-24-65', '(0512)37-24-38'],
    },
  },
  {
    id: '3',
    title: 'crew',
    img: img_3,
    info: {
      en: [
        '+38 (067) 510 62 27',
        'mk@redcross.org.ua',
        'Andrii Olehovych Skorokhod',
        'Central Avenue, 21, Mykolaiv, Ukraine',
      ],
      uk: [
        '+38 (067) 510 62 27',
        'mk@redcross.org.ua',
        'Скороход Андрій Олегович',
        'проспект Центральний, 21, м. Миколаїв, Україна',
      ],
    },
  },
];

const helpList = {
  img: help_back,
  list: [
    {
      id: '1',
      title: 'contact',
      info: {
        en: ['+38(0512)751-588', '+38(0512)533-588'],
        uk: ['+38(0512)751-588', '+38(0512)533-588'],
      },
    },
    {
      id: '2',
      title: 'call',
      info: {
        en: ['+38(093)649-2299 Serhiy Anatoliyovych', '+38(096)085-0507'],
        uk: ['+38(093)649-2299 Сергій Анатолійович', '+38(096)085-0507'],
      },
    },
  ],
};

const Contacts = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();

  return <ContactsComponent links={links} hotLines={hotLines} helpList={helpList} lang={language} t={t} />;
};

export default Contacts;
