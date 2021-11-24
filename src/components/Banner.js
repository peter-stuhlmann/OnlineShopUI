import React from 'react';
import styled from 'styled-components';

export default function Banner(props) {
  const { image } = props;

  return <Image src={image.src} alt={image.description} />;
}

const Image = styled.img`
  width: 100%;
`;
