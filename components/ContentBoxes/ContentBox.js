import Head from 'next/head'
import styled from "styled-components"
import Image from 'next/image'


export default function ContentBox({
  srcLeft = "/star.png",
  titleLeft='title',
  sizeLeft='24px',
  weightLeft='500',
  colorLeft= '#F0F0F0',
  alignLeft='right',
  fontLeft= 'Advent Pro',
  
  descpLeft='description',
  dSizeLeft='24px',
  dWeightLeft='500',
  dColorLeft= '#F0F0F0',
  dAlignLeft='right',
  dFontLeft= 'Montserrat',

  srcRight = "/star.png",
  titleRight='title',
  sizeRight='24px',
  weightRight='500',
  colorRight= '#F0F0F0',
  alignRight='right',
  fontRight= 'Advent Pro',
 
  descpRight='description',
  dSizeRight='24px',
  dWeightRight='500',
  dColorRight= '#F0F0F0',
  dAlignRight='right',
  dFontRight= 'Montserrat',
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
            <TitleLeft sizeLeft={sizeLeft} weight={weightLeft} color={colorLeft} align={alignLeft} font={fontLeft}>
              {titleLeft}
            </TitleLeft>
            <DescriptionLeft dSizeLeft={dSizeLeft} dWeightLeft={dWeightLeft} dColorLeft={dColorLeft} dAlignLeft={dAlignLeft} dFontLeft={dFontLeft}>
              {descpLeft}
            </DescriptionLeft>
        </Box>
        <Icon srcLeft={srcLeft} width="90" height="90"/>
      </BorderBox>
      <BorderBox>
        <Box> 
            <TitleRight sizeRight={sizeRight} weight={weightRight} color={colorRight} align={alignRight} font={fontRight}>
              {titleRight}
            </TitleRight>
            <DescriptionRight dSizeRight={dSizeRight} dWeightRight={dWeightRight} dColorRight={dColorRight} dAlignRight={dAlignRight} dFontRight={dFontRight}>
              {descpRight}
            </DescriptionRight>
        </Box>
        <Icon srcRight={srcLeft} width="90" height="90"/>
      </BorderBox>

    </>  
  )
}

const TitleLeft = styled.div`
padding: 10px;
justify-content: center;
align-items: center;
justify-self: center;
justify-items: center;
font-family: ${props=>props.fontLeft};
  align-self: ${props=>props.alignLeft};
  color: ${props=>props.colorLeft};
  font-weight:${props=>props.weightLeft};
  font-size:${props=>props.sizeLeft};
`;

const DescriptionRight = styled.div`
padding: 10px;
justify-content: center;
align-items: center;
justify-self: center;
justify-items: center;
font-family: ${props=>props.dFontRight};
  align-self: ${props=>props.dAlignRight};
  color: ${props=>props.dColorRight};
  font-weight:${props=>props.dWeightRight};
  font-size:${props=>props.dSizeRight};
`;

const TitleRight = styled.div`
padding: 10px;
justify-content: center;
align-items: center;
justify-self: center;
justify-items: center;
font-family: ${props=>props.fontRight};
  align-self: ${props=>props.alignRight};
  color: ${props=>props.colorRight};
  font-weight:${props=>props.weightRight};
  font-size:${props=>props.dSizeRight};
`;

const DescriptionLeft = styled.div`
padding: 10px;
justify-content: center;
align-items: center;
justify-self: center;
justify-items: center;
font-family: ${props=>props.dFontLeft};
  align-self: ${props=>props.dAlignLeft};
  color: ${props=>props.dColorLeft};
  font-weight:${props=>props.dWeightLeft};
  font-size:${props=>props.dSizeLeft};
`;

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
width: 500px;
`;

const Icon = styled(Image)`
display: flex;
justify-content: center;
background-image: url(${props => props.src});
`;