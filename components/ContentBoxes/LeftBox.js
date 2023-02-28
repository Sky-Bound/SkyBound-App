import Head from 'next/head'
import styled from "styled-components"
import Image from 'next/image'
import Text from '../AppText/Text';

export default function LeftBox({
    src = "/star.png",
    title='title',
    size='24px',
    weight='500',
    color= '#F0F0F0',
    align='left',
    font= 'Advent Pro',
    
    descp='description',
    dSize='24px',
    dWeight='500',
    dColor= '#F0F0F0',
    dAlign='left',
    dFont= 'Montserrat'
}){

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Advent+Pro:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
      </Head>
      <BorderBox>
        <Icon src={src} width="90" height="90"/>
        <Box> 
            <Title size={size} weight={weight} color={color} align={align} font={font}>
              {title}
            </Title>
            <Description dSize={dSize} dWeight={dWeight} dColor={dColor} dAlign={dAlign} dFont={dFont}>
              {descp}
            </Description>
        </Box>
      </BorderBox>
    </>  
  )
}


const Title = styled.div`
padding: 10px;
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

const Description = styled.div`
padding: 10px;
justify-content: center;
align-items: center;
justify-self: center;
justify-items: center;
font-family: ${props=>props.dFont};
  align-self: ${props=>props.dAlign};
  color: ${props=>props.dColor};
  font-weight:${props=>props.dWeight};
  font-size:${props=>props.dSize};
`;

const BorderBox = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0.75rem;
gap: 2rem;
`;

const Box = styled.div`
display: flex;
flex-direction: column;
width: 500px;
`;

const Icon = styled(Image)`
display: flex;
justify-content: center;
background-image: url(${props => props.src});
`;