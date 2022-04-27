import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {createGlobalStyle, DefaultTheme} from 'styled-components';
import {Provider} from 'react-redux';
import {store} from '../redux';

const GlobalStyle = createGlobalStyle<{theme: DefaultTheme}>`
  html, body, main, section, div  {
    margin: 0;
    padding: 0;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return <Provider store={store}>
    <GlobalStyle />
    <Component {...pageProps} />
  </Provider>
}

export default MyApp
