import Banner from '@/components/Banner'
import Content from '@/components/Content'
import Head from 'next/head'
// import Image from 'next/image'
// import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Virtualwardrobe.com - wear your shirts</title>
        <meta name="description" content="Virtualwardrob.com - wear your shirts" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      
      <Banner/>
      <Content/>
    </>
  )
}
