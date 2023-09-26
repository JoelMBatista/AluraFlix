import { useState } from "react";
import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";
import CampoDeTexto from "../textbox/campoTexto";
import AreaDeTexto from "../textbox/areaDeTexto";
import ListaCategorias from "../listaCategorias/listaCategorias";
import Boton from "../boton/boton";

const FormStyled = styled.section`
  display: flex;
  justify-content: center;

  .formulario {
    max-width: 80%;
  }

  .formulario h2 {
    font-size: 60px;
    font-weight: 400;
    text-align: center;
  }

  .Buttom_group {
    width: 1000px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
  }

  .GyL {
    display: flex;
    justify-content: space-between;
    width: 22%;
  }
`;

const FormularioVideo = (props) => {
  const {
    mostrarVideoForm,
    registrarVideo,
    categoriaBoton,
    mostrarBanner,
    Mostrarcategoria,
  } = props;
  // const {Mostrarcategoria} = props.Mostrarcategoria;

  const [titulo, setTitulo] = useState("");
  const [video, setVideo] = useState("");
  const [imagen, setImagen] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [categoria, setCategoria] = useState("");
  const [mostrarError, setMostrarError] = useState(false);
  const [limpiar, setLimpiar] = useState(false);

  const enviarDatos = (e) => {
    e.preventDefault();

    if (!titulo || !video || !imagen || !descripcion || !categoria) {
      setMostrarError(true);
    } else {
      const data = {
        titulo: titulo,
        video: video,
        imagen: imagen,
        descripcion: descripcion,
        categoria: categoria,
      };
      mostrarBanner();
      mostrarVideoForm();
      registrarVideo(data);
    }
  };

  const limpiarFormulario = () => {
    setTitulo("");
    setVideo("");
    setImagen("");
    setDescripcion("");
    setCategoria("");
    setMostrarError(false);
    setLimpiar(true);
  };

  return (
    <FormStyled>
      <form className="formulario" onSubmit={enviarDatos}>
        <h2>Nuevo video</h2>
        <CampoDeTexto
          key={limpiar ? "limpiar-titulo" : "titulo"}
          placeholder="Titulo"
          value={titulo}
          updateValue={setTitulo}
          required={titulo ? true : mostrarError}
          onFocus={() => setMostrarError(false)}
        />
        <CampoDeTexto
          key={limpiar ? "Link del video" : "Video"}
          placeholder="Link del video"
          value={video}
          updateValue={setVideo}
          required={video ? true : mostrarError}
          onFocus={() => setMostrarError(false)}
        />
        <CampoDeTexto
          key={limpiar ? "Link imagen del video" : "Imagen"}
          placeholder="Link imagen del video"
          value={imagen}
          updateValue={setImagen}
          required={imagen ? true : mostrarError}
          onFocus={() => setMostrarError(false)}
        />
        <ListaCategorias
          key={limpiar ? "Categoria" : "Categoria"}
          value={categoria}
          updateValue={setCategoria}
          Mostrarcategoria={Mostrarcategoria}
          required={categoria ? true : mostrarError}
        />
        <AreaDeTexto
           key={limpiar ? "Descripción" : "Descripción"}
          placeholder="Descripción"
          value={descripcion}
          updateValue={setDescripcion}
          required={descripcion ? true : mostrarError}
          onFocus={() => setMostrarError(false)}
        />
        <div className="Buttom_group">
          <div className="GyL">
            <Boton
              texto="Guardar"
              variant="contained"
              funcion={(e) => {
                enviarDatos(e);
              }}
            />
            <Boton
              texto="Limpiar"
              variant="contained"
              color="error"
              icon={<DeleteIcon />}
              funcion={() => {
                limpiarFormulario();
              }}
            />
          </div>
          <Boton
            texto="Nueva Categoría"
            variant="contained"
            funcion={() => {
              categoriaBoton();
              mostrarVideoForm();
            }}
          />
        </div>
        {mostrarError && (
          <div className="mensaje-error">
            Por favor, completa todos los campos.
          </div>
        )}
      </form>
    </FormStyled>
  );
};

export default FormularioVideo;
