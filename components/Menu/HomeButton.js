import { useRouter } from 'next/router';
import * as React from 'react';
import styled from "styled-components";
import { AiFillHome } from 'react-icons/ai';

export default function HomeButton({
  }){
    const r = useRouter();
    const Home = () => {
        r.push("/");
}    
        return (
          <>
            <BorderBox onClick={Home}>
                <AiFillHome size="50px" color="#F0F0F0"/>
            </BorderBox>
          </>
        );
      };
  
  const BorderBox = styled.div`
    display: flex;
    position: fixed;
    padding: 2rem;
    top: 0;
    left: 0;
`;
  