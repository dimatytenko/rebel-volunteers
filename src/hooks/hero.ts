import { useEffect, useState } from 'react';

import { getHeroQuery } from '../queries/main';
import { HeroT } from '../types/hero';

export const useHero = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [hero, setHero] = useState<HeroT>();

  useEffect(() => {
    getHero();
  }, []);

  const getHero = async () => {
    try {
      setIsLoading(true);
      const res = await getHeroQuery();
      setHero(res.body);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { hero, isLoading };
};
