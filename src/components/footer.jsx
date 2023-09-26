import React from "react";
import styled from "styled-components";

const Logo = styled.img`
  width: 252.5px;
  height: 60px;
`;

const FooterStyled = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 4px solid #2a7ae4;
  margin-top: 50px;


  .insignias img{
    width: 100px;
}
`;

const Footer = () => {
  return (
    <FooterStyled>
      <Logo src="img/Logo.png" alt="Logo" />
      <div className="insignias">
      <img
        src="https://d335luupugsy2.cloudfront.net/cms%2Ffiles%2F10224%2F1671211354Prancheta_4.png?utm_campaign=alura_latam_-_challenge_email_projeto_3_esp&utm_medium=email&utm_source=RD+Station"
        alt="1"
      />
      <img
        src="https://d335luupugsy2.cloudfront.net/cms%2Ffiles%2F10224%2F1671210503Prancheta_3.png?utm_campaign=alura_latam_-_challenge_email_projeto_1_esp&utm_medium=email&utm_source=RD+Station"
        alt="2"
      />
      <img
        src="https://d335luupugsy2.cloudfront.net/cms%2Ffiles%2F10224%2F1671211724Prancheta_10.png?utm_campaign=alura_latam_-_challenge_email_projeto_4_esp&utm_medium=email&utm_source=RD+Station"
        alt="3"
      />
</div>
    </FooterStyled>
  );
};

export default Footer;
