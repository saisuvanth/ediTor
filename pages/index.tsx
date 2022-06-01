import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import { Paper } from '@mui/material'
import MyHome from '../src/layouts/Home'

const Home: NextPage = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {

  }, [])

  return (
    <Paper elevation={5} className={styles.container}>
      <Head>
        <title>Code Editor</title>
        <meta name="description" content="Code editor for editing online" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MyHome />
    </Paper>
  )
}


export default Home
