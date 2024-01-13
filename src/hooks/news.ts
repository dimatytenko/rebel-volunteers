import { useEffect, useState } from 'react';

import { getNewsQuery } from '../queries/report';
import { SpeakAboutUsState } from '../types/speakAboutUs';

export const useNews = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [news, setNews] = useState<SpeakAboutUsState[]>();

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    try {
      setIsLoading(true);
      const res = await getNewsQuery();
      setNews(res.body);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { news, isLoading };
};
