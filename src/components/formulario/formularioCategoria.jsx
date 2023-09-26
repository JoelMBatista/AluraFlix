import { useState } from "react";
import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";
import CampoDeTexto from "../textbox/campoTexto";
import AreaDeTexto from "../textbox/areaDeTexto";
import Boton from "../boton/boton";

const FormStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  .formulario {
    max-width: 80%;
    margin-bottom: 70px;
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
  table {
   border-collapse: collapse;
    border: 2px solid #e5e5e5;
    border-radius: 4px;
    width: 1000px;
  }
  table tr td{
    border: 2px solid #e5e5e5;
    border-collapse: collapse;
    padding-left: 20px;
  }
  table  .botones{
    display: flex;
    justify-content: space-evenly;
    border-collapse: collapse;
    
  }
`;

const FormularioCategoria = (props) => {
  const { mostrarVideoForm, categoriaBoton, registrarCategoria, categorias, eliminarCategoria } =
    props;
  const [titulo, setTitulo] = useState("");
  const [color, setColor] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [mostrarError, setMostrarError] = useState(false);
  const [limpiar, setLimpiar] = useState(false);

  const enviarDatos = (e) => {
    e.preventDefault();

    if (!titulo || !descripcion || !color) {
      setMostrarError(true);
    } else {
      const data = {
        titulo: titulo,
        descripcion: descripcion,
        color: color,
      };
      registrarCategoria(data);
      categoriaBoton();
      mostrarVideoForm();
    }
  };

  const limpiarFormulario = () => {
    setTitulo("");
    setColor("");
    setDescripcion("");
    setMostrarError(false);
    setLimpiar(true);
  };

  return (
    <FormStyled>
      <form className="formulario" onSubmit={enviarDatos}>
        <h2>Nueva categoría</h2>
        <CampoDeTexto
          key={limpiar ? "limpiar-titulo" : "titulo"}
          placeholder="Nombre"
          value={titulo}
          updateValue={setTitulo}
          required={titulo ? true : mostrarError} 
          onFocus={() => setMostrarError(false)}
        />
        <CampoDeTexto
          key={limpiar ? "limpiar-Color" : "Color"}
          placeholder="Color"
          value={color}
          updateValue={setColor}
          required={color ? true : mostrarError} 
          onFocus={() => setMostrarError(false)}
          type="color"
        />
        <AreaDeTexto
          key={limpiar ? "limpiar-Descripción" : "Descripción"}
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
        </div>
        {mostrarError && (
          <div className="mensaje-error">
            Por favor, completa todos los campos.
          </div>
        )}
      </form>
      <div>
        <table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Color</th>
              <th>Descripción</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {categorias.map((categoria) => (
              <tr key={categoria.id}>
                <td>{categoria.titulo}</td>
                <td>{categoria.color}</td>
                <td>{categoria.descripcion}</td>
                <td className="botones">
                  <Boton
                    texto="Eliminar"
                    variant="contained"
                    color="error"
                    icon={<DeleteIcon />}
                    funcion={()=>{eliminarCategoria(categoria.id)}}
                  />
                  <Boton texto="Editar" variant="contained" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </FormStyled>
  );
};

export default FormularioCategoria;
