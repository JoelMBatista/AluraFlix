import React from "react";
import styled from "styled-components";
//Banner usando Styled components
const BannerStyled = styled.div`
  background-image: url("img/portada.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin: 0;
  box-shadow: 0 0 300px #0a0a0a inset;
  height: 832px;

`;

const Banner = () => {
  return (
    <BannerStyled>
    </BannerStyled>
  );
};

export default Banner;
