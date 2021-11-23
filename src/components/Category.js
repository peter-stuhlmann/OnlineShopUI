import React, { Fragment, useEffect, useRef } from 'react';
import styled from 'styled-components';

import Product from './Product';

export default function Category(props) {
  const { category, storeItems, anchor, setAnchor, isActive, index } = props;

  const categoryTitle = useRef();

  useEffect(() => {
    if (isActive === index) {
      setAnchor(categoryTitle?.current?.offsetTop - 220);
    }
    window.scrollTo(0, anchor);
  });

  return (
    <Fragment>
      <CategoryName ref={categoryTitle}>{category.title}</CategoryName>
      <ProductList>
        {storeItems.storeItems
          .filter(
            (storeItem) => storeItem.metadata.category === category.internalName
          )
          .map((storeItem) => (
            <Product product={storeItem} key={storeItem.storeId} />
          ))}
      </ProductList>
    </Fragment>
  );
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
