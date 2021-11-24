import React from 'react';
import styled from 'styled-components';

export default function Navigation(props) {
  const { categories, isActive, setIsActive } = props;

  return (
    <Container>
      <List>
        {categories.map((category, i) => (
          <ListItem onClick={() => setIsActive(i)} key={category.storeId}>
            <Icon src={category.metadata.icon} alt={category.title} />
            <CategoryName isActive={isActive} index={i}>
              {category.title}
            </CategoryName>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

const Container = styled.nav`
  position: sticky;
  top: 56px;
  background-color: #f7f7f7;
  overflow-x: auto;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  justify-content: center;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const Icon = styled.img`
  height: 50px;
  margin-top: 15px;
  margin-bottom: 10px;
`;

const CategoryName = styled.span`
  color: ${(props) => (props.isActive === props.index ? '#000' : '#00ae9a')};
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0.5px;
  text-align: center;
  padding: 0 18px 10px 18px;
  border-bottom: ${(props) =>
    props.isActive === props.index
      ? '3px solid #000'
      : '3px solid transparent'};

  @media (max-width: 1020px) {
    font-size: 14px;
  }
`;
