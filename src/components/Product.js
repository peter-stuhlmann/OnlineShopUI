import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import useScrollbarSize from 'react-scrollbar-size';

import ProductSettings from './ProductSettings';

export default function Product(props) {
  const { product } = props;

  const currency = product.currency === 'USD' ? '$' : product.currency;

  const [settingsBoxOpen, setSettingsBoxOpen] = useState(false);

  const handleProductClick = () => {
    setSettingsBoxOpen(true);
  };

  const { width } = useScrollbarSize();

  if (settingsBoxOpen) {
    document.body.style.overflow = 'hidden';
    document.body.style.marginRight = width + 'px';
  } else {
    document.body.style.overflow = 'auto';
    document.body.style.marginRight = 0;
  }

  return (
    <Fragment>
      <Container onClick={() => handleProductClick()}>
        <Image src={product.image_url} alt={product.title} />
        <Content>
          <Text>
            <Title>{product.title}</Title>
            <Description>{product.subtitle}</Description>
          </Text>
          <Price>
            {currency}
            {product.price}
          </Price>
        </Content>
      </Container>
      <ProductSettings
        product={product}
        open={settingsBoxOpen}
        setOpen={setSettingsBoxOpen}
      />
    </Fragment>
  );
}

const Container = styled.li`
  flex: 0 0 calc(100% / 4 - 26px);
  margin: 13px;
  border-radius: 5px;
  border: 5px solid transparent;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  &:hover {
    border: 5px solid #00ae9a;
  }

  @media (max-width: 1020px) {
    flex: 0 0 calc(100% / 3 - 26px);
    margin: 13px;
  }

  @media (max-width: 768px) {
    flex: 0 0 calc(100% - 26px);
    margin: 13px;
  }
`;

const Image = styled.img`
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 15px;
  flex: 1;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0;
`;

const Title = styled.h3`
  text-align: center;
  margin-bottom: 10px;
`;

const Description = styled.p`
  text-align: center;
  font-size: 14px;
  color: #363636;
  letter-spacing: 0.2px;
  margin: 0;
`;

const Price = styled.div`
  text-align: center;
  font-weight: bold;
`;
