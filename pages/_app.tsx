import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import createEmotionCache from '../src/utils/createEmotionCache'
import { CacheProvider, EmotionCache } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import theme from '../src/utils/theme';
import { useEffect, useState } from 'react';
import SplashScreen from '../src/components/SplashScreen';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

function MyApp(props: MyAppProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      // setLoading(false);
    }, 5000);
  }, [])

  const { emotionCache, Component, pageProps } = props
  return (
    <>
      {
        !loading ?
          <CacheProvider value={emotionCache || clientSideEmotionCache}>
            <Head>
              <meta name='viewport' content='initial-scale=1,width=device-width' />
            </Head>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Component {...pageProps} />
            </ThemeProvider>
          </CacheProvider>
          : <SplashScreen />
      }
    </>
  )
}

export default MyApp  
