import { useEffect, useState } from 'react';

import { getTeamQuery } from '../queries/main';
import { TeamMemberT } from '../types/team';

export const useTeam = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [team, setTeam] = useState<TeamMemberT[]>();

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
