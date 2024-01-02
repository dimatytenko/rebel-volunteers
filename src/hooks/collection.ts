import { useEffect, useState } from 'react';

import { getCollectionQuery } from '../queries/main';
import { CollectionT } from '../types/collection';

export const useCollection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [collection, setCollection] = useState<CollectionT>();

  useEffect(() => {
    getCollection();
  }, []);

  const getCollection = async () => {
    try {
      setIsLoading(true);
      const res = await getCollectionQuery();
      setCollection(res.body);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { collection, isLoading };
};
