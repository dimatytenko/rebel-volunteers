import { useEffect, useState } from 'react';

import { getReportsQuery } from '../queries/main';

import { ReportData } from '../types/report';

export const useReports = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [reports, setReports] = useState<ReportData>();

  useEffect(() => {
    getReports();
  }, []);

  const getReports = async () => {
    try {
      setIsLoading(true);
      const res = await getReportsQuery();

      setReports(res.body);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { reports, isLoading };
};
