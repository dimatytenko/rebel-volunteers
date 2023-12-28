import { RecoilRoot } from 'recoil';
import { WithChildren } from '../types/helpers';

const RecoilProvider: React.FC<WithChildren> = ({ children }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default RecoilProvider;
