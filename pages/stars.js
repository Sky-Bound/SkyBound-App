import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

import styles from '../styles/Stars.module.css'
import Menu from '../components/Menu/Menu'
import HomeButton from '../components/Menu/HomeButton'
import Weather from '../components/WeatherAPI/Weather'
import StarCard from '../components/StarCard'
import record from '../database/constellations.json'
import Text from '../components/AppText/Text'



export default function Stars() {

  console.log(record);

  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (event) => {
    event.preventDefault();
    // perform search logic here
  };


  return (
    <div className={styles.starscontainer}>
      <div className={styles.starfog}>
      <div className={styles.starsbg}>
      <div className={styles.twinkle}></div>
      <div className={styles.starrybg}></div>

      <Head>
        <title>Stars</title>
        <meta name="description" content="stars and constellations" />
        <link rel="icon" href="/stars.png" />
      </Head>

      <main className={styles.main}>
        <HomeButton />
        <Weather />

        <div className={styles.content}>
        <Text txt="The Stars𓇻" font="Astro" weight="500" size="80px"  />
        <Text txt='Explore the constellations and their origins in the night sky'/>
          <input
            type="text"
            placeholder="Search constellations..."
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
        </div>
      

        <div className={styles.grid}>
        {
            record.map( (rec, index) => {
              const name = rec.Constellation.toLowerCase();
              const query = searchQuery.toLowerCase();
              const show = name.includes(query) || query === "";

              return(
                <div key={index}>
                  <StarCard 
                  src={rec.Image}
                  name={rec.Constellation}
                  genitive={rec.Genitive}
                  meaning={rec.Meaning}
                  origin={rec.Origin}
                  star={rec['Brightest star']}
                  show={show}
                  />
                  
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