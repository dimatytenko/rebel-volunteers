import { useEffect, useState } from 'react';

import { getOurActivityQuery } from '../queries/main';
import { OurAtivityProps } from '../types/ourActivity';

export const useOurActivity = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [ourActivity, setOurActivity] = useState<OurAtivityProps>();

  useEffect(() => {
    getOurActivity();
  }, []);

  const getOurActivity = async () => {
    try {
      setIsLoading(true);
      const res = await getOurActivityQuery();
      setOurActivity(res.body);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { ourActivity, isLoading };
};
