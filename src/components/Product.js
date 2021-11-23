import React from 'react';
import styled from 'styled-components';

export default function Product(props) {
  const { product } = props;

  const currency = product.currency === 'USD' ? '$' : product.currency;

  return (
    <Container key={product.storeId}>
      <Image src={product.image_url_square} alt={product.title} />
      <Title>{product.title}</Title>
      <Description>{product.subtitle}</Description>
      <Price>
        {currency}
        {product.price}
      </Price>
    </Container>
  );
}

const Container = styled.li``;

const Image = styled.img``;

const Title = styled.h3``;

const Description = styled.p``;

const Price = styled.div``;
