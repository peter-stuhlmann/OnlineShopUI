import React, { useRef } from 'react';
import styled from 'styled-components';

import useOnClickOutside from '../hooks/useOnClickOutside';

export default function ProductSettings(props) {
  const { product, open, setOpen } = props;

  const container = useRef();
  useOnClickOutside(container, () => setOpen(false));

  const handleCloseButtonClick = () => {
    setOpen(false);
  };

  console.log(open);
  return (
    <Container open={open} ref={container}>
      <CloseButton
        viewBox="0 0 16 26"
        version="1.1"
        onClick={() => handleCloseButtonClick()}
      >
        <g transform="translate(-195, -150)">
          <g transform="translate(195, 150)">
            <path d="M8.96404,7.49977 L14.6988,1.7671 C15.1005,1.36324 15.1005,0.706689 14.6988,0.302896 C14.2949,-0.100965 13.6363,-0.100965 13.2346,0.302896 L7.49984,6.03557 L1.7671,0.302896 C1.36324,-0.100965 0.706689,-0.100965 0.302896,0.302896 C-0.100897,0.706757 -0.100965,1.3633 0.302896,1.7671 L6.03557,7.49977 L0.302896,13.2345 C-0.100965,13.6362 -0.100965,14.2949 0.302896,14.6987 C0.706757,15.1004 1.3633,15.1004 1.7671,14.6987 L7.49977,8.96397 L13.2345,14.6987 C13.6362,15.1004 14.2949,15.1004 14.6987,14.6987 C15.1004,14.2948 15.1004,13.6362 14.6987,13.2345 L8.96404,7.49977 Z" />
            <path d="M4.41601562,24.3671875 L4.41601562,25 L0.923828125,25 L0.923828125,19.3632812 L4.41601562,19.3632812 L4.41601562,19.9960938 L1.62695312,19.9960938 L1.62695312,21.8046875 L4.27148438,21.8046875 L4.27148438,22.4296875 L1.62695312,22.4296875 L1.62695312,24.3671875 L4.41601562,24.3671875 Z M5.41992188,23.5273438 L6.13085938,23.5273438 C6.21679688,24.1171875 6.77929688,24.4921875 7.58007812,24.4921875 C8.33789062,24.4921875 8.89648438,24.0820312 8.89648438,23.5234375 C8.89648438,23.0429688 8.54492188,22.7382812 7.76757812,22.5429688 L7.04492188,22.3554688 C6.02539062,22.0976562 5.58398438,21.6367188 5.58398438,20.8359375 C5.58398438,19.8789062 6.38476562,19.2304688 7.57617188,19.2304688 C8.66601562,19.2304688 9.47851562,19.8789062 9.53710938,20.7890625 L8.83007812,20.7890625 C8.73242188,20.2109375 8.25585938,19.8671875 7.55273438,19.8671875 C6.80273438,19.8671875 6.30664062,20.2421875 6.30664062,20.8125 C6.30664062,21.2539062 6.61523438,21.5078125 7.39257812,21.7070312 L7.98242188,21.8632812 C9.15039062,22.15625 9.61914062,22.609375 9.61914062,23.4375 C9.61914062,24.4726562 8.80273438,25.1328125 7.51367188,25.1328125 C6.31835938,25.1328125 5.49414062,24.5 5.41992188,23.5273438 Z M13.0566406,25.1328125 C11.5253906,25.1328125 10.5683594,24 10.5683594,22.1835938 C10.5683594,20.3632812 11.5214844,19.2304688 13.0527344,19.2304688 C14.2402344,19.2304688 15.1660156,19.9765625 15.3339844,21.0625 L14.6191406,21.0625 C14.4316406,20.3359375 13.8300781,19.8789062 13.0527344,19.8789062 C11.9707031,19.8789062 11.2910156,20.7695312 11.2910156,22.1835938 C11.2910156,23.5976562 11.9707031,24.484375 13.0566406,24.484375 C13.8417969,24.484375 14.4394531,24.0820312 14.6191406,23.4296875 L15.3339844,23.4296875 C15.1464844,24.4648438 14.2558594,25.1328125 13.0566406,25.1328125 Z" />
          </g>
        </g>
      </CloseButton>
      <Title>{product.title}</Title>
      <Image src={product.image_url} alt={product.title} />
      <FooterBar open={open}>
        <Back onClick={() => handleCloseButtonClick()}>Back</Back>
      </FooterBar>
    </Container>
  );
}

const Container = styled.div`
  width: 60%;
  max-width: 700px;
  background-color: rgb(249, 249, 249);
  height: calc(100vh - 56.67px - 46px);
  position: fixed;
  bottom: 46px;
  right: ${(props) => (props.open ? '0' : '-60%')};
  transition: 0.2s ease-in-out;
  padding: 20px;
  box-sizing: border-box;
  overflow-y: auto;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 768px;
    right: ${(props) => (props.open ? '0' : '-768px')};
  }
`;

const CloseButton = styled.svg`
  height: 30px;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  fill: #6c6c6c;
`;

const Title = styled.div`
  display: inline-block;
  font-size: 20px;
  padding-bottom: 10px;
  padding-right: 15px;
  border-bottom: 1px solid #000;
  margin-bottom: 15px;
`;

const Image = styled.img`
  width: 100%;
`;

const FooterBar = styled.div`
  background: red;
  background-color: rgb(245, 245, 245);
  position: fixed;
  bottom: 0;
  right: ${(props) => (props.open ? '0' : '-60%')};
  transition: 0.2s ease-in-out;
  height: 46px;
  width: 60%;
  max-width: 700px;
  padding: 12px 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 768px;
    right: ${(props) => (props.open ? '0' : '-768px')};
  }
`;

const Back = styled.span`
  text-decoration: underline;
  font-size: 12px;
  margin-left: 0;
  color: #6c6c6c;
  cursor: pointer;
`;
