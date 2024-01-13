import { useEffect, useState } from 'react';

import { getChevronsQuery } from '../queries/report';
import { IData } from '../types/mainSlider';

export const useChevrones = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [chevrones, setChevrones] = useState<IData>();

  useEffect(() => {
    getChevrones();
  }, []);

  const getChevrones = async () => {
    try {
      setIsLoading(true);
      const res = await getChevronsQuery();
      setChevrones({
        galleryID: 'chevrones-slider',
        images: res.body,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { chevrones, isLoading };
};
