import Head from 'next/head'
import styled from "styled-components"

export default function Text({
  txt='SkyBound',
  size='64x',
  weight='500',
  color= '#F0F0F0',
  align='left',
  font= 'Advent Pro'
}){

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Advent+Pro:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Gelasio:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
      </Head>
      <TxtCont size={size} weight={weight} color={color} align={align} font={font}>
          {txt}
      </TxtCont>
    </>  
  )
}

const TxtCont = styled.div`
  font-family: ${props=>props.font};
  justify-content: center;
  align-items: center;
  justify-self: center;
  justify-items: center;
  align-self: ${props=>props.align};
  color: ${props=>props.color};
  font-weight:${props=>props.weight};
  font-size:${props=>props.size};
`;