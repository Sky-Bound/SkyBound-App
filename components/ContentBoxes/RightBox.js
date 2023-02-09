import Head from 'next/head'
import styled from "styled-components"
import Image from 'next/image'
import Text from '../AppText/Text';

export default function RightBox({
    src = "/star.png",
}){

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Advent+Pro:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
      </Head>
      <BorderBox>
        <Box> 
            <Text txt="Saturn" size="24px" weight="500" />
            <Text txt="Saturn Saturn Saturn Saturn Saturn Saturn" size="20px" weight="400" />
        </Box>
        <Icon src={src} width="90" height="90"/>
      </BorderBox>
    </>  
  )
}

const BorderBox = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0.75rem
gap: 2rem;
`;

const Box = styled.div`
display: flex;
flex-direction: column;
width: 200px;
`;

const Icon = styled(Image)`
display: flex;
justify-content: center;
background-image: url(${props => props.src});
`;