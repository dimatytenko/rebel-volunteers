import { useEffect, useState } from 'react';

import { getSectionsQuery } from '../queries/main';
import { SectionT } from '../types/sections';

export const useSections = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [sections, setSections] = useState<SectionT[]>([]);

  useEffect(() => {
    getSections();
  }, []);

  const getSections = async () => {
    try {
      setIsLoading(true);
      const res = await getSectionsQuery();
      setSections(res.body);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { sections, isLoading };
};
