import React from 'react';
import styled from 'styled-components';

export default function Footer() {
  return (
    <Container>
      Copyright ©2021 Peter R. Stuhlmann. All rights reserved.
    </Container>
  );
}

const Container = styled.footer`
  background-color: #2c2c2c;
  color: #c3c1c1;
  margin-top: 30px;
  padding: 10px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 13px;
`;
