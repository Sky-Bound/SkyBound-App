import axios from 'axios'
import Head from 'next/head';
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import Text from '../AppText/Text';
export default function Weather() {
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
      <BorderBox>
        <Text txt={weatherData.main?.temp.toFixed(0)} size="40px" weight="400" font="Gelasio"/>
        <Text txt="°" size="30px" weight="400" font="Gelasio"/>
      </BorderBox>
    </>
  )
}

const BorderBox = styled.div`
    display: flex;
    position: fixed;
    padding: 2rem;
    top: 0;
    right: 0;
`;
