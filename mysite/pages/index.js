import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mike D&apos;s site!</title>
        <meta name="description" content="" />
        <link rel="icon" href="/duck.webp" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my website.
        </h1>

        <div className={styles.grid}>
          <Link href='/aboutme'>
            <a className={styles.card}>
              <h2>About me &rarr;</h2>
              <p>Who I am...what I do...what I am thinking...</p>
            </a>
          </Link>
          <Link href='/projects'>
            <a className={styles.card}>
              <h2>Projects &rarr;</h2>
              <p>What I&apos;ve done...</p>
            </a>
          </Link>
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
    </div>
  )
}
