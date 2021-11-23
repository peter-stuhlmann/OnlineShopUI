import React, { Fragment } from 'react';
import styled from 'styled-components';

import storeItems from '../data/storeItems.json';

import Product from './Product';

export default function Home() {
  return storeItems.categories.map((category) => (
    <Fragment key={category.storeId}>
      <CategoryName>{category.title}</CategoryName>
      <ProductList>
        {storeItems.storeItems
          .filter(
            (storeItem) => storeItem.metadata.category === category.internalName
          )
          .map((storeItem) => (
            <Product product={storeItem} />
          ))}
      </ProductList>
    </Fragment>
  ));
}

const CategoryName = styled.h2`
  color: #00ae9a;
  text-align: center;
  width: 100%;
  max-width: 1350px;
  margin: 35px auto 20px auto;
  font-size: 30px;
`;

const ProductList = styled.ul`
  padding: 0;
  width: 100%;
  max-width: 1350px;
  margin: 0 auto;
  list-style-type: none;
  display: flex;
  flex-flow: row wrap;
`;
