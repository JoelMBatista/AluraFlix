import React from "react";
import { Button } from "@mui/material";
import styled from "styled-components";


const ButtonStyled = styled.div`
      .boton {
    border-color: #ffffff;
    color: #ffffff;
    font-family: "Roboto", sans-serif;
    text-transform: none;
  }
`

const Boton = (props) => {

  const {texto, variant, color, icon, funcion} = props;

    return <ButtonStyled>
          <Button variant={variant} className="boton" color={color}  startIcon={icon} onClick={funcion}>
        {texto}
      </Button>
    </ButtonStyled>
}

export default Boton;

