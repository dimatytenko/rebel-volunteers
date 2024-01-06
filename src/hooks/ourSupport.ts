import { useEffect, useState } from 'react';

import { getSupportQuery } from '../queries/main';
import { OurSupportData } from '../types/ourSupport';

export const useSupport = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [support, setSupport] = useState<OurSupportData[]>();

  useEffect(() => {
    getSupport();
  }, []);

  const getSupport = async () => {
    try {
      setIsLoading(true);
      const res = await getSupportQuery();
      setSupport(res.body);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { support, isLoading };
};
