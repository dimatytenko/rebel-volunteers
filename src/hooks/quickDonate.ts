import { useEffect, useState } from 'react';

import { getQuickDonateQuery } from '../queries/main';

export const useQuickDonate = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [quickDonate, setQuickDonate] = useState();

  useEffect(() => {
    getQuickDonate();
  }, []);

  const getQuickDonate = async () => {
    try {
      setIsLoading(true);
      const res = await getQuickDonateQuery();
      setQuickDonate(res.body);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { quickDonate, isLoading };
};
