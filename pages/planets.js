import Head from 'next/head'
import styles from '../styles/Planets.module.css'
import Menu from '../components/Menu/Menu'
import HomeButton from '../components/Menu/HomeButton'
import Weather from '../components/WeatherAPI/Weather'
import LeftBox from '../components/ContentBoxes/LeftBox'
import RightBox from '../components/ContentBoxes/RightBox'
import Text from '../components/AppText/Text'
import Image from 'next/image'
import Planet from '../components/Planet'
import { useEffect, useState } from 'react'


export default function Planets() {
  const [planets, setPlanets] = useState();
    const url = 'https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planet/list';

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': 'cd1d39da66msh0174a15141798a2p1bcccajsn97a12c5766e4',
              'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com'
            }
          };

        fetch(url, options)
        .then (response => response.json())
        .then (response =>{
            console.log(response);
            setPlanets(response);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

  return (
    <div className={styles.planetscontainer}>
      <div className={styles.planetsfog}>
      <div className={styles.planetsbg}>
      <div className={styles.twinkle}></div>
      <div className={styles.starrybg}></div>
      <Head>
        <title>Planets</title>
        <meta name="description" content="List of planets" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <HomeButton />
        <Weather />

        <Text txt="The Planets𓇻" font="Astro" weight="500" size="80px"  />
        <Text txt='Learn about the eight planets in our Solar System'/>

        <div className={styles.grid}>
        {
          planets && planets.map((d) => {
            return (
              <div key={d.div}>
                <Planet 
                  name={d.name}
                  descp={d.description}
                  src={d.imgSrc[0].img}/>
              </div>
            )
          })
        }
        </div>



        <Menu />

      </main>
    </div>
    </div>
    </div>
  )
}