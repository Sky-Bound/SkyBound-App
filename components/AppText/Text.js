import Head from 'next/head'
import styled from "styled-components"

export default function Text({
  txt='',
  character='',
  size='64x',
  weight='500',
  color= '#F0F0F0',
  align='left',
  font= '',
  padding='0px'
}){

  return (
    <>
      <TxtCont size={size} weight={weight} color={color} align={align} font={font} padding={padding}>
          {txt}{character}
      </TxtCont>
    </>  
  )
}

const TxtCont = styled.div`
padding: ${props=>props.padding};
justify-content: center;
align-items: center;
justify-self: center;
justify-items: center;
font-family: ${props=>props.font};
  align-self: ${props=>props.align};
  color: ${props=>props.color};
  font-weight:${props=>props.weight};
  font-size:${props=>props.size};
`;