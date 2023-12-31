import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';

import RoutesSwitch from './Routes';
import { GlobalStyles } from './styles';
import { Layout } from './containers/Layout';
import { defaultTheme } from './ui-kit/theme';
import RecoilProvider from './containers/RecoilProvider';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'photoswipe/style.css';
import 'rc-drawer/assets/index.css';
import './ui-kit/fonts/fonts.css';
import './ui-kit/ImageWithPreview/styles.css';

function App() {
  return (
    <RecoilProvider>
      <ThemeProvider theme={defaultTheme}>
        <Layout>
          <RoutesSwitch />
        </Layout>
        <Normalize />
        <GlobalStyles />
      </ThemeProvider>
    </RecoilProvider>
  );
}

export default App;
