import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import createEmotionCache from '../src/utils/createEmotionCache'
import { CacheProvider, EmotionCache } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import theme from '../src/utils/theme';
import { useEffect, useState } from 'react';
import SplashScreen from '../src/layouts/SplashScreen';
import Login from './login';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

function MyApp(props: MyAppProps) {
  const [loading, setLoading] = useState<boolean>(true);
  const [isLogin, setIsLogin] = useState<boolean>(false);

  useEffect(() => {
    setLoading(false);
    setIsLogin(localStorage.getItem('login') ? true : false);
  }, [])

  const { emotionCache, Component, pageProps } = props
  return (

    <CacheProvider value={emotionCache || clientSideEmotionCache}>
      <Head>
        <meta name='viewport' content='initial-scale=1,width=device-width' />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {
          // isLogin ?
          // loading ? <SplashScreen /> :
          // <Component {...pageProps} /> :
          <Login />
        }
      </ThemeProvider>
    </CacheProvider>

  )
}

export default MyApp  
