import {useEffect, useState} from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {Title} from '@kilo-lab/web-design.title';
import {Header} from '@kilo-lab/web-design.header';
import useAxios from 'axios-hooks';
import {IoEarth} from 'react-icons/io5';
import {API} from '../axios';
import styles from '../styles/Home.module.css'
import {Page} from '../components';
import {useTheme} from '../theme';

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const login = async () => {
    setLoading(true);
    try {
      const result = await API.post('/auth/login', {
        email: 'merveillevaneck@gmail.com',
        password: 'M3reille',
      });
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  return [login, { loading }] as const; 
}

const Home: NextPage = () => {

  const [theme] = useTheme();

  const [login, {loading}] = useLogin();

  useEffect(() => {
    login();
  }, []);

  if (loading) return <div>hello</div>

  return (
    <Page>
      <Head>
        <title>KiloLab Next Template</title>
        <meta name="description" content="Generated by KiloLab NextJS Templates" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header LeftElement={<IoEarth style={{marginRight: '10px'}} color="white" size={20} />} color="white" backgroundColor={theme.colors.primary} title="KiloLab NextJS Template" position="fixed" top="0" left={0} right={0} width="100%" />
      <main className={styles.main}>
        <Title color="black" fontSize="70px" margin="30px 0px">
          Welcome to
          <br />
          <a style={{color: theme.colors.primary}} href="https://www.github.com/merveillevaneck/kilolab-next-template">KiloLab&apos;s NextJS <br />Template</a>
        </Title>

        <img src="http://localhost:3001/earth_spin.svg" width="500px" height="500px" />

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </Page>
  )
}

export default Home
