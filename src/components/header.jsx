import React from "react";
import styled from "styled-components";
import Boton from "./boton/boton";

//estilos de los componentes imagen(logo) y el boton

const Logo = styled.img`
  width: 168.45px;
  height: 40px;
`;

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px 40px;
  background-color: #000000;
  border-bottom: 4px solid #2a7ae4;
`;

const Header = (props) => {

  const {mostrarVideoForm, videoBoton, mostrarBanner, videoBotonCategoria} = props;

  return (
    <HeaderStyled>
      <Logo src="img/Logo.png" alt="Logo" />
      {videoBoton === false && videoBotonCategoria=== false ?  <Boton texto="Nuevo Video" variant="outlined" funcion={() =>{mostrarVideoForm(); mostrarBanner();} }/>: <></>} 
     
    </HeaderStyled>
  );
};

export default Header;
