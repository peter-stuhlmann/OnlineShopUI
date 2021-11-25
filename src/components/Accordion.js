import React from 'react';
import styled from 'styled-components';

export default function Accordion(props) {
  const { tab, index } = props;

  return (
    <Tab>
      <Input type="checkbox" id={tab.title + index} />
      <Label for={tab.title + index}>
        {tab.title}
        <ExpandIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
          <path d="M17.525 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L205.947 256 10.454 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L34.495 36.465c-4.686-4.687-12.284-4.687-16.97 0z" />
        </ExpandIcon>
      </Label>
      <Content>
        {tab.content.map((check, i) => (
          <Entry key={check.text + i}>
            <CheckboxLabel>
              <Checkbox type="checkbox" />
              {check.text}
            </CheckboxLabel>
            {check.price && (
              <Price>
                {check.currency}
                {check.price}
              </Price>
            )}
          </Entry>
        ))}
      </Content>
    </Tab>
  );
}

const Tab = styled.div`
  width: 100%;
  background-color: #fff;
  overflow: hidden;
  margin-bottom: 10px;
  border-left: 1px solid #0c7657;
`;

const Label = styled.label`
  display: flex;
  justify-content: space-between;
  padding: 1em;
  font-weight: bold;
  cursor: pointer;
  color: #0c7657;
  border-bottom: 1px solid rgba(45, 43, 45, 0.1);
`;

const ExpandIcon = styled.svg`
  width: 10px;
  fill: #0c7657;
`;

const Content = styled.div`
  max-height: 0;
  padding: 0 1em;
  color: #363636;
  transition: all 0.35s;
  font-size: 14px;
`;

const Entry = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CheckboxLabel = styled.label`
  display: block;
`;

const Checkbox = styled.input`
  filter: hue-rotate(310deg);
`;

const Price = styled.div`
  font-weight: bold;
`;

const Input = styled.input`
  position: absolute;
  opacity: 0;
  z-index: -1;

  &:checked {
    ~ ${Content} {
      max-height: 100vh;
      padding: 1em;
    }
  }
`;
