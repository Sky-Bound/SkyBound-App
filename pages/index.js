import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import Text from '../components/AppText/Text'
import Menu from '../components/Menu/Menu'
import LeftBox from '../components/ContentBoxes/LeftBox'
import RightBox from '../components/ContentBoxes/RightBox'
import POTD from '../components/NASA-POTD-API/Potd'
import WeatherHome from '../components/WeatherAPI/WeatherHome'
import Weather from '../components/WeatherAPI/Weather'
import Widget from '../components/Widget'

export default function Home () {
  return(
    <div className={styles.container}>
    {/* <div className={styles.skyAnimation}> */}

      <Head>
        <title>Skybound</title>
        <meta name="description" content="Astronomy app" />
        <link rel="icon" href="/star.png" />
      </Head>

      <main className={styles.main}>
        
        <div className={styles.description}>
          {/* <WeatherHome /> */}
          <Text txt="Sky𓇻Bound" font="Astro" weight="500" size="80px"  />
          <Text txt='Explore the wonders of the night sky with information on constellations, planets, and the moon. Learn about the wonders of space with NASA picture of the day to keep up-to-date with the latest celestial discoveries'/>
        </div>

        <div className={styles.grid}>
        <Widget icon='/star.svg' txt='Stars' to='/stars'/>
        <Widget icon='/space.svg' txt='Space' to='/space'/>
        {/* <Widget icon='/moon.svg' txt='Moon' to='/moon'/> */}
        <Widget icon='/planet.svg' txt='Planets' to='/planets'/>
        </div>

        {/* <Menu /> */}
      </main>
    </div>
    // </div>
  )
}