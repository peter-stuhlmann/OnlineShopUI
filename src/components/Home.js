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

const CategoryName = styled.h2``;

const ProductList = styled.ul``;
