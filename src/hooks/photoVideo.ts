import { useEffect, useState } from 'react';

import { getPhotoVideoQuery } from '../queries/report';
import { ReportsSliderState } from '../types/reportsSlider';

export const usePhotoVideo = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [photoVideo, setPhotoVideo] = useState<ReportsSliderState>();

  useEffect(() => {
    getPhotoVideo();
  }, []);

  const getPhotoVideo = async () => {
    try {
      setIsLoading(true);
      const res = await getPhotoVideoQuery();
      setPhotoVideo(res.body);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { photoVideo, isLoading };
};
