import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';

import RoutesSwitch from './Routes';
import { GlobalStyles } from './styles';
import { Layout } from './containers/Layout';
import { defaultTheme } from './ui-kit/theme';
import './ui-kit/fonts/fonts.css';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'photoswipe/style.css';
import './ui-kit/ImageWithPreview/styles.css';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Layout>
        <RoutesSwitch />
      </Layout>
      <Normalize />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
