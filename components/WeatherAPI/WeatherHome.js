import axios from 'axios'
import Head from 'next/head';
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import Text from '../AppText/Text';

export default function WeatherHome() {
  const [weatherData, setWeatherData] = useState({});

  const CITY_NAME = "Burnaby";
  const API_KEY = "da099f872aba6423e0b2426fadaa778b";
  var units = "metric";


  useEffect(() => {
    const fetchWeatherData = async () => {
      const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&units=${units}&appid=${API_KEY}`);
      const data = await res.json();
      setWeatherData(data);
    };

    fetchWeatherData();
  }, []);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Gelasio:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
      </Head>
      <Box>
        <Text txt={weatherData.main?.temp.toFixed()} character="°" size="100px" weight="400" font="Gelasio"/> 
        <Text txt={weatherData.weather?.[0].description} size="35px" weight="400"/>
        <Text txt={new Date(weatherData.dt * 1000).toLocaleString()} size="20px" weight="400"/>
      </Box>
    </>
  )
}

const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;

// const Row = styled.div`
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
//     align-items: center;
// `;