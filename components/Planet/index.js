import styled from 'styled-components';
import { useState } from 'react';
import img from '../../public/placerphoto.jpg';

export const Container = styled.div
`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #f5f5f5;
    padding: 20px;
    position: relative;
`

export const Image = styled.div
`
    border-radius: 10px;
    height: 200px;
    width: 200px;
    background-image: url(${props => props.src});
    background-size: cover; 
    background-repeat: no-repeat;
    background-position: center center;

`

export const Title = styled.h1
`
    font-size: 30px;
    margin: 0px;
    padding: 10px;

`
export let Txt = styled.p
`
    font-size: 15px;
    color: #000000;
    border-radius: 10px;
    padding: 15px;
    margin: 0px;
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, .2); 
    background-color: rgba(255, 255, 255, .25);
    backdrop-filter: blur(5px);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
    transition: .5s ease;
`

export default function Card({
    name="name",
    descp="Description",
    src = "/placerphoto.jpg",
}) 
{

    const [visible, setVisible] = useState(false); 
    return(
        <Container
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)} >
        <Image src={src}/>
            <Title> {name}</Title>
            {visible && (
            <Txt>{descp}</Txt>
            )}
        </Container>
    )
}