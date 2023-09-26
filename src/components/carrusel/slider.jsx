

import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import VideoCard from "./videocard";

const ImageSliderStyled = styled.div`
  overflow-x: hidden;
  width: auto;

  margin-left: 28px;
  .estilos {
    display: flex;
    flex-direction: row;
    position: relative;
    cursor: grab;
  }
`;

const ImageCarrusel = (props) => {
  const { color, videos, eliminarVideo, id } = props;
  const sliderRef = useRef(null);
  const [dragLeftConstraint, setDragLeftConstraint] = useState(0);

  useEffect(() => {
    const sliderWidth = sliderRef.current.offsetWidth;
    const contentWidth = Array.from(sliderRef.current.children).reduce((acc, child) => acc + child.offsetWidth, 0);
    setDragLeftConstraint(sliderWidth - contentWidth);
  }, []);

  return (
    <ImageSliderStyled>
      <motion.div className="estilos" drag="x" dragConstraints={{ right: 0, left: dragLeftConstraint }} ref={sliderRef}>
        {videos.map((video, i) => {
          return (
            <motion.div key={i}>
              <VideoCard color={color} data={video} eliminarVideo={eliminarVideo} id={id}/>
            </motion.div>
          );
        })}
      </motion.div>
    </ImageSliderStyled>
  );
};

export default ImageCarrusel;
