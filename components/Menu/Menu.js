import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import * as React from 'react';
import Image from 'next/image';

import styled from "styled-components";
import Text from '../AppText/Text';

export default function Menu({
  }){
        const [currentPage, setCurrentPage] = useState('home');
        const router = useRouter();

        const r = useRouter();
        const Planets = () => {
            r.push("/planets");
        }
        const Moon = () => {
            r.push("/moon");
        }
        const Stars = () => {
            r.push("/stars");
        }
        const Space = () => {
            r.push("/space");
        }
      
        useEffect(() => {
          setCurrentPage(router.pathname);
        }, [router.pathname]);
      
        let planets, moon, stars, space;
        switch (currentPage) {
          case '/planets':
            planets = '/planetglow.svg';
            stars = '/star.svg';
            space = '/space.svg';
            moon = '/moon.svg';
            break;
          case '/stars':
            planets = '/planet.svg';
            stars = '/starglow.svg';
            space = '/space.svg';
            moon = '/moon.svg';
            break;
          case '/moon':
            planets = '/planet.svg';
            stars = '/star.svg';
            space = '/space.svg';
            moon = '/moonglow.svg';
            break;
          case '/space':
            planets = '/planet.svg';
            stars = '/star.svg';
            space = '/spaceglow.svg';
            moon = '/moon.svg';
            break;
          default:
            planets = '/planetglow.svg';
            stars = '/starglow.svg';
            space = '/spaceglow.svg';
            moon = '/moonglow.svg';
        }      
      
        return (
          <>
            <BackgroundBox>
                <MenuBox>
                    <IconBox onClick={Planets}>
                        <Image src={planets} width="50" height="50" /> 
                        <Text txt="Planets" size="16px" weight="600" />
                    </IconBox>
                    <IconBox onClick={Stars}>
                        <Image src={stars} width="50" height="50" /> 
                        <Text txt="Stars" size="16px" align="center" weight="600"/>
                    </IconBox>
                    <IconBox onClick={Moon}>
                        <Image src={moon} width="50" height="50" /> 
                        <Text txt="Moon" size="16px" align="center" weight="600"/>
                    </IconBox>      
                    <IconBox onClick={Space}>
                        <Image src={space} width="50" height="50" /> 
                        <Text txt="Space" size="16px" align="center" weight="600"/>
                    </IconBox>
                </MenuBox>
            </BackgroundBox>
          </>
        );
      };
  
  const BackgroundBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(gradient.png);
    background-color: rgba(0, 0, 0, 0.7);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: fixed;
    bottom: 0;
    height: 110px;
    width: 100vw;
    border-radius: 50px 50px 0px 0px;
`;

  const MenuBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 50px;
    position: fixed;
    bottom: 0;
    padding: 1rem;
  `;

  const IconBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
  `;
  