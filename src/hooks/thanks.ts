import { useEffect, useState } from 'react';

import { getThanksQuery } from '../queries/report';
import { IData } from '../types/mainSlider';

export const useThanks = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [thanks, setThanks] = useState<IData>();

  useEffect(() => {
    getThanks();
  }, []);

  const getThanks = async () => {
    try {
      setIsLoading(true);
      const res = await getThanksQuery();
      setThanks({
        galleryID: 'thanks-slider',
        images: res.body,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { thanks, isLoading };
};
