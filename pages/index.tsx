import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import { Paper } from '@mui/material'
import MyHome from '../src/layouts/Home'
import HomeContextProvider from '../src/contexts/HomeContext'
import SplashScreen from 'src/layouts/SplashScreen'
import { PrivatePage } from 'src/utils/types'

const Home: PrivatePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // setTimeout(() => {
    setLoading(false);
    // }, 3000)
  }, [])

  return (
    <Paper elevation={5} className={styles.container}>
      <Head>
        <title>Code Editor</title>
        <meta name="description" content="Code editor for editing online" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeContextProvider>
        {loading ? <SplashScreen /> : <MyHome />}
      </HomeContextProvider>
    </Paper>
  )
}

Home.private = true;

export default Home
