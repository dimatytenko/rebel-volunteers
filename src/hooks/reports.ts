import { useEffect, useState } from 'react';

import { getReportsQuery } from '../queries/main';

import { ReportData } from '../types/report';

const firstMockData = [
  {
    id: Date.now().toString(),
    title: 'reports',
    subtitle: 'transferred',
  },
  {
    id: Date.now().toString(),
  },
];

const secondMockData = [
  {
    id: Date.now().toString(),
  },
  {
    id: Date.now().toString(),
  },
];

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

      const reports = [
        ...firstMockData,
        ...res.body.photos.slice(0, 3),
        ...secondMockData,
        ...res.body.photos.slice(3),
      ];

      const data = { ...res.body, photos: reports };

      setReports(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { reports, isLoading };
};
