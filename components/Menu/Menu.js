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
        const Telescope = () => {
            r.push("/space");
        }
      
        useEffect(() => {
          setCurrentPage(router.pathname);
        }, [router.pathname]);
      
        let planets, moon, stars, telescope;
        switch (currentPage) {
          case '/planets':
            planets = '/planet.png';
            moon = '/moonfilled.png';
            stars = '/starfilled.png';
            telescope = '/telescopefilled.png';
            break;
          case '/moon':
            planets = '/planetfilled.png';
            moon = '/moon.png';
            stars = '/starfilled.png';
            telescope = '/telescopefilled.png';
            break;
          case '/stars':
            planets = '/planetfilled.png';
            moon = '/moonfilled.png';
            stars = '/star.png';
            telescope = '/telescopefilled.png';
            break;
          case '/space':
            planets = '/planetfilled.png';
            moon = '/moonfilled.png';
            stars = '/starfilled.png';
            telescope = '/telescope.png';
            break;
          default:
            planets = '/planetfilled.png';
            moon = '/moonfilled.png';
            stars = '/starfilled.png';
            telescope = '/telescopefilled.png';
        }      
      
        return (
          <>
            <BackgroundBox>
                <MenuBox>
                    <IconBox onClick={Planets}>
                        <Image src={planets} width="50" height="50" /> 
                        <Text txt="Planets" size="16px" weight="600" />
                    </IconBox>
                    <IconBox onClick={Moon}>
                        <Image src={moon} width="50" height="50" /> 
                        <Text txt="Moon" size="16px" align="center" weight="600"/>
                    </IconBox>
                    <IconBox onClick={Stars}>
                        <Image src={stars} width="50" height="50" /> 
                        <Text txt="Stars" size="16px" align="center" weight="600"/>
                    </IconBox>    
                    <IconBox onClick={Telescope}>
                        <Image src={telescope} width="50" height="50" /> 
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
    gap: 30px;
    position: fixed;
    bottom: 0;
    padding: 1rem;
  `;

  const IconBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
  `;
  