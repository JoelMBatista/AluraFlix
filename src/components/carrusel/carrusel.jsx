import styled from "styled-components";
import ImageCarrusel from "./slider";
const SectionStyled = styled.section`

  display: flex;
  flex-direction: column;
  overflow-x: hidden;

  .titulo {
    text-align: center;
    font-size: 60px;
    font-weight: 400;
    width: fit-content;
    height: 80px;
    padding: 0 8px;
    line-height: normal;
    border-radius: 5px;
    margin-left: 28px;
  }
`;
const Carrusel = (props) => {
  const {videoBoton, videos, eliminarVideo} = props;
  const{titulo, color, id} = props.data;
 
  return (
    <>
      {videoBoton === false && videos.length > 0 ? (

        
        <SectionStyled>
          <h1 className="titulo" style={{backgroundColor: color}}>{titulo}</h1>
        <ImageCarrusel videos={videos} color={color} eliminarVideo={eliminarVideo} id={id}/>
        </SectionStyled>
        
      ) : (
        <></>
      )}
    </>
  );
};

export default Carrusel;
