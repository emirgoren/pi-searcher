import Head from 'next/head'
import Searcher from '../components/Searcher'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pi Searcher</title>
        <meta name="description" content="An application to search Pi. Built with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Searcher/>
    </div>
  )
}
