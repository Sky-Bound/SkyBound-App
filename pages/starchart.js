import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'

import axios from 'axios'

// const inter = Inter({ subsets: ['latin']})


export default function Home() {

 const [data, setData] = useState();

 useEffect(() => {

   const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': 'cd1d39da66msh0174a15141798a2p1bcccajsn97a12c5766e4',
      'X-RapidAPI-Host': 'astronomy.p.rapidapi.com'
    },
    body: '{"format":"png","observer":{"date":"2020-11-01","latitude":6.56774,"longitude":79.88956},"style":{"backgroundColor":"red","backgroundStyle":"stars","headingColor":"white","moonStyle":"sketch","textColor":"red"},"view":{"type":"portrait-simple"}}'
  };
  
  fetch('https://astronomy.p.rapidapi.com/api/v2/studio/moon-phase', options)
	.then(response => response.json())
	.then(response => {
    console.log(response)
    setData(response)
  })
	.catch(err => console.error(err));

}, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Skybound</title>
      </Head>

      <main className={styles.main}>

        API Info Test:

        {/* {data} */}

       {/* { options && option.map((w, index) => {

        })
      } */}


      </main>
    </div>
  )
 }