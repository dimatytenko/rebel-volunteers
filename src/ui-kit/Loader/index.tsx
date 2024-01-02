import { Puff } from 'react-loader-spinner';
import { useTheme } from 'styled-components';

export const Loader = () => {
  const { palette } = useTheme();

  return (
    <Puff
      visible={true}
      height="100"
      width="100"
      color={palette.colors.red}
      ariaLabel="rings-loading"
      wrapperStyle={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
};
