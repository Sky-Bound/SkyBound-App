import React from "react";
import styled from "styled-components";
import Text from "../AppText/Text";
import styles from '../../styles/Home.module.css'

const DateInput = props => (
  <Center>
    <form onSubmit={props.changeDate}>
      <Center>
        <Text txt="Select a date:" size="20px" weight="600" color="#0F1C3F" align="center"/>
      </Center>
        <Row>
          <input className={styles.date} type="date"/>
          <input className={styles.submit} type="submit" />
        </Row>
    </form>
  </Center>
  );
  
export default DateInput;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 1rem;
  padding: 0.5rem;
`;

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 0.1rem;
`;