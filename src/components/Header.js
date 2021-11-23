import React from 'react';
import styled from 'styled-components';

export default function Header() {
  return (
    <Container>
      <span>lorem</span>
      <span>ipsum</span>
    </Container>
  );
}

const Container = styled.header`
  font-family: 'Chango', cursive;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 1px;
  background-color: #fff;
  padding: 10px 5px;

  span {
    &:first-child {
      color: #0c7657;
    }
    &:last-child {
      color: #9ec8bc;
    }
  }
`;
