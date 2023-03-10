import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import { useState, useEffect } from 'react'

import axios from 'axios'

// const inter = Inter({ subsets: ['latin']})


export default function Home() {

  const [data, setData] = useState();

    // const http = require("https");
    const url = "https://astronomy.p.rapidapi.com/api/v2/bodies/positions/venus?latitude=33.775867&longitude=-84.39733&from_date=2017-12-20&to_date=2017-12-21&elevation=166&time=12%3A00%3A00"

    useEffect(() =>{
    
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '4acc2644f102881f7cd608db9b8a689b8d3c91901fed8170725544453d6be1ad293122706e8023a109f20121eb59113dcd03aca05266699c6f6a5bc4580aa6694c9edf6d52506b3f4d313b1cfc2afaf59953887c38edd27afda5fcebad217f4b9cf747676d1b0b07f47ecf54cc016fbe',
          'X-RapidAPI-Host': 'astronomy.p.rapidapi.com'
        }
      };

      fetch(url, options)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));

    // const req = http.request(options, function (res) {
    //   const chunks = [];

    //   res.on("data", function (chunk) {
    //     chunks.push(chunk);
    //   });

    //   res.on("end", function () {
    //     const body = Buffer.concat(chunks);
    //     console.log(body.toString());
    //   });
    // });

    // req.write("{\"style\":{\"moonStyle\":\"default\",\"backgroundStyle\":\"stars\",\"backgroundColor\":\"#000000\",\"headingColor\":\"#ffffff\",\"textColor\":\"#ffffff\"},\"observer\":{\"latitude\":33.775867,\"longitude\":-84.39733,\"date\":\"2023-01-24\"},\"view\":{\"type\":\"portrait-simple\",\"parameters\":{}}}");
    // req.end();

  },[])



  //JS HTTP
  // const data = "{\"style\":{\"moonStyle\":\"default\",\"backgroundStyle\":\"stars\",\"backgroundColor\":\"#000000\",\"headingColor\":\"#ffffff\",\"textColor\":\"#ffffff\"},\"observer\":{\"latitude\":33.775867,\"longitude\":-84.39733,\"date\":\"2023-01-24\"},\"view\":{\"type\":\"portrait-simple\",\"parameters\":{}}}";

  // const xhr = new XMLHttpRequest();
  // xhr.withCredentials = true;
  
  // xhr.addEventListener("readystatechange", function () {
  //   if (this.readyState === this.DONE) {
  //     console.log(this.responseText);
  //   }
  // });
  
  // xhr.open("POST", "https://api.astronomyapi.com/api/v2/studio/moon-phase");
  // xhr.setRequestHeader("Authorization", "Basic MjY2Y2Q3OWEtNWEyYy00MGQxLWI4NGUtNWQyZTRmNWEwOWI3OjRhY2MyNjQ0ZjEwMjg4MWY3Y2Q2MDhkYjliOGE2ODliOGQzYzkxOTAxZmVkODE3MDcyNTU0NDQ1M2Q2YmUxYWQyOTMxMjI3MDZlODAyM2ExMDlmMjAxMjFlYjU5MTEzZGNkMDNhY2EwNTI2NjY5OWM2ZjZhNWJjNDU4MGFhNjY5NGM5ZWRmNmQ1MjUwNmIzZjRkMzEzYjFjZmMyYWZhZjU5OTUzODg3YzM4ZWRkMjdhZmRhNWZjZWJhZDIxN2Y0YjljZjc0NzY3NmQxYjBiMDdmNDdlY2Y1NGNjMDE2ZmJl");
  
  // xhr.send(data);

//RAPID 
//  const [data, setData] = useState();

//  useEffect(() => {

//    const options = {
//     method: 'POST',
//     headers: {
//       'content-type': 'application/json',
//       'X-RapidAPI-Key': 'cd1d39da66msh0174a15141798a2p1bcccajsn97a12c5766e4',
//       'X-RapidAPI-Host': 'astronomy.p.rapidapi.com'
//     },
//     body: '{"format":"png","observer":{"date":"2020-11-01","latitude":6.56774,"longitude":79.88956},"style":{"backgroundColor":"red","backgroundStyle":"stars","headingColor":"white","moonStyle":"sketch","textColor":"red"},"view":{"type":"portrait-simple"}}'
//   };
  
//   fetch('https://astronomy.p.rapidapi.com/api/v2/studio/moon-phase', options)
// 	.then(response => response.json())
// 	.then(response => {
//     console.log(response)
//     setData(response)
//   })
// 	.catch(err => console.error(err));

// }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Skybound</title>
      </Head>

      <main className={styles.main}>

        API Info Test:

        {/* {
          data && data.map((d) => {
            return(
              <div key={d.data}>
                <Image src={d.imageUrl} width="50" height="50" alt={d.name}/>
              </div>
            )
          })
        } */}


      </main>
    </div>
  )
 }