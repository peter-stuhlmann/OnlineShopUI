import React, { Fragment, useState } from 'react';

import storeItems from '../data/storeItems.json';

import Header from './Header';
import Footer from './Footer';
import Navigation from './Navigation';
import Category from './Category';

export default function Home() {
  const [isActive, setIsActive] = useState(null);

  const [anchor, setAnchor] = useState(0);

  return (
    <Fragment>
      <Header />
      <Navigation
        categories={storeItems.categories}
        isActive={isActive}
        setIsActive={setIsActive}
      />
      {storeItems.categories.map((category, i) => (
        <Category
          key={category.storeId}
          category={category}
          storeItems={storeItems}
          anchor={anchor}
          setAnchor={setAnchor}
          isActive={isActive}
          index={i}
        />
      ))}
      <Footer />
    </Fragment>
  );
}
