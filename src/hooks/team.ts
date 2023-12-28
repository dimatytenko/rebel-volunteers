import { useEffect, useState } from 'react';

import { getTeamQuery } from '../queries/main';

export const useTeam = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [team, setTeam] = useState<any>([]);

  useEffect(() => {
    getTeam();
  }, []);

  const getTeam = async () => {
    try {
      setIsLoading(true);
      const res = await getTeamQuery();
      setTeam(res.body);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { team, isLoading };
};
