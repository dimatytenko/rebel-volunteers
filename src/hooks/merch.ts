import { useEffect, useState } from 'react';

import { getMerchQuery } from '../queries/main';
import { MerchData } from '../types/merch';

export const useMerch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [merch, setMerch] = useState<MerchData>();

  useEffect(() => {
    getMerch();
  }, []);

  const getMerch = async () => {
    try {
      setIsLoading(true);
      const res = await getMerchQuery();
      setMerch(res.body);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { merch, isLoading };
};
