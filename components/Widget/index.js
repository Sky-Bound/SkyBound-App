import styled from 'styled-components';
import Image from 'next/image';
import Head from 'next/head';
import Text from '../AppText/Text';
import Link from 'next/link';

export const Container = styled(Link)
`
        display:flex;
        justify-content:center;
        align-items: center;
        flex-direction: column;
        font-family: Montserrat;
        border-radius: 10px;
        width: 150px;
        box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .2); 
        background-color: rgba(255, 255, 255, .15);
        backdrop-filter: blur(5px);
        margin: 15px;
        padding: 15px;
        color: #f5f5f5f5;
        border: none;

        &:hover {
            transform: scale(1.05); 
        }
        
`


export const Icon = styled(Image)
`
 object-fit: contain;
`

export default function Widget({
    txt = "Name here",
    icon = "/placerphoto.jpg",
    to = "/index"

}) {

    return (
        <Container href={to}>
            <Icon  src={icon} width={50} height={50}/>
            <div>{txt}</div>
        </Container>
    )
}