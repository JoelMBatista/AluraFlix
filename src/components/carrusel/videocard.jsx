import React from "react";
import styled from "styled-components";


const VideoCardStyled = styled.div`
position: relative;
  .videoCard {
    width: 432px;
    height: 260.85px;
    border: solid 4px;
    border-radius: 4px; 
    pointer-events: none;
    margin-right: 10px;
  }

  .enlace {
    
    position: absolute;
    bottom: 9px;
    left: 5px;
    color: white;
    text-decoration: none;
    font-weight: bold;
    border: solid 2px;
    border-radius: 4px;
    padding: 4px;
    margin: 8px;

  }

  .boton {
    
    position: absolute;
    bottom: 9px;
    right: 20px;
    color: white;
    text-decoration: none;
    font-weight: bold;
    border: none;
    border-radius: 4px;
    padding: 8px;
    margin: 8px;
    background-color: #ec4444;
    cursor: pointer;

  }
`;

const VideoCard = (props) => {
  const {color, eliminarVideo} = props
  const {imagen, video, id} = props.data


  return (
    <VideoCardStyled>
      <img src={imagen} alt="imagen" className="videoCard" style={{borderColor: color}} />
      <a href={video} className="enlace" target="blank"  style={{borderColor: color, backgroundColor: color}}>
        Ver video
      </a>
      <button className="boton" onClick={()=>{eliminarVideo(id)}}>Eliminar</button>
    </VideoCardStyled>
  );
};

export default VideoCard;
