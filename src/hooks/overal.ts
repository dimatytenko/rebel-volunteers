import { useEffect, useState } from 'react';

import { getOveralQuery } from '../queries/report';
import { IList } from '../types/blockList';

export const useOveral = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [overal, setOveral] = useState<IList[]>();

  useEffect(() => {
    getOveral();
  }, []);

  const getOveral = async () => {
    try {
      setIsLoading(true);
      const res = await getOveralQuery();
      setOveral(res.body);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { overal, isLoading };
};
