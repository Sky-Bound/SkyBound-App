import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Space.module.css'
import Menu from '../components/Menu/Menu'
import HomeButton from '../components/Menu/HomeButton'
import Weather from '../components/WeatherAPI/Weather'
import DateInput from '../components/NASA-POTD-API/DateInput'
import Photo from '../components/NASA-POTD-API/Photo'
import POTD from '../components/NASA-POTD-API/Potd'
import Text from '../components/AppText/Text'

export default function Space() {
  return (
    <div className={styles.spacecontainer}>
      <div className={styles.spacefog}>
      <div className={styles.spacebg}>
      <div className={styles.spacebg2}>
      <div className={styles.twinkle}></div>
      <div className={styles.starrybg}></div>
      <Head>
        <title>Space</title>
        <meta name="description" content="NASA Picture of the day API" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <HomeButton />
        <Weather />

        <div className={styles.content}>
          <Text txt="Astronomy Picture of the Day𓇻" font="Astro" weight="500" size="60px"/> <br/><br/>
          <Text txt='Every day NASA features a photograph from our facinating universe. Each image has a description written by a professional astronomer to learn more. '/> <br/>
          <Text txt='Select a date, submit and discover the featured picture for your selected date!'/>
          <POTD/>
        </div>
        {/* <DateInput/> */}
        {/* NOT WORKING <Photo/> */}
        
        <Menu />
      </main>
    </div>
    </div>
    </div>
    </div>
  )
}