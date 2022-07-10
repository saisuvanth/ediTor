import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import createEmotionCache from '../src/utils/createEmotionCache'
import { CacheProvider, EmotionCache } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import theme from '../src/utils/theme';
import AuthContextProvider from 'src/contexts/AuthContext';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

function MyApp(props: MyAppProps) {


  const { emotionCache, Component, pageProps: { session, ...pageProps } } = props;
  console.log(Component)
  console.log(pageProps);
  return (
    <CacheProvider value={emotionCache || clientSideEmotionCache}>
      <Head>
        <meta name='viewport' content='initial-scale=1,width=device-width' />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AuthContextProvider>
          <Component {...pageProps} />
        </AuthContextProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp  
