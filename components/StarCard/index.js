import styled from 'styled-components';
import Image from 'next/image';
import Head from 'next/head'

export const Container = styled.div
`
        display:flex;
        justify-content:center;
        align-items: center;
        flex-direction: column;
        font-family: Montserrat;
        border-radius: 10px;
        width: 200px;
        box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .2); 
        background-color: rgba(255, 255, 255, .15);
        backdrop-filter: blur(5px);
        margin: 15px;
        color: #f5f5f5f5;

        &:hover {
            transform: scale(1.05); 
        }
        
`
export const Wrapper = styled.div
`
    display: flex;
    flex-direction: column;
    border-radius: 0px 0px 10px 10px;
    font-size; 16px;
    padding: 20px;
`
export const Name = styled.h1
`
    margin: 0px;
    font-family: Montserrat;
    font-size: 22px;
`
export const Latin = styled.h2
`
    font-style: italic;
    font-size: 14px;
    font-weight: 400;
    margin: 0px;
`
export const Descp = styled.p
`
    margin: 3px;
    font-size: 14px;
    padding-bottom: 10px;
`


export const Constellation = styled(Image)
`
 border-radius: 10px 10px 0px 0px;
 object-fit: contain;
 background-color: #000;
`

export default function StarCard({
    name = "Name here",
    genitive = "latin name",
    meaning = "blah blah blah",
    origin= "blah blah blah",
    star = "blah blah blah",
    src = "/placerphoto.jpg",
    show = true,

}) {

    if (!show) {
        return null;
      }

    return (
        <Container show={show}>
            <Constellation src={src} width={200} height={150}/>
            <Wrapper>
                <Name>{name}</Name>
                <Latin>{genitive}</Latin>
                <Descp>"{meaning}"</Descp>
                <Descp><strong>Origin: </strong>{origin}</Descp>
                <Descp><strong>Brightest Star: </strong>{star}</Descp>
            </Wrapper>
        </Container>
    )
}