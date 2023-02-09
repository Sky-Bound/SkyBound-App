import React from "react";
import styled from "styled-components";
import Text from "../AppText/Text";
import styles from '../../styles/Home.module.css'

const Photo = props => (
    <Center>
        <img className={styles.img} src={props.photo.url} alt={props.photo.title} />
        <Text txt={props.photo.title} size="24px" weight="500" color="#0F1C3F" align="center"/>
      {/* <p>{props.photo.explanation}</p> */}
    </Center>
  );
  
export default Photo;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;


