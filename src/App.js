import { useState } from "react";
import { v4 as uuid } from "uuid";
import Banner from "./components/banner";
import Header from "./components/header";
import Footer from "./components/footer";
import FormularioVideo from "./components/formulario/formularioVideo";
import FormularioCategoria from "./components/formulario/formularioCategoria";
import Carrusel from "./components/carrusel/carrusel";

function App() {
  const [videoForm, setVideoForm] = useState(false);
  const [categoriaForm, setCategoriaForm] = useState(false);
  const [banner, setBanner] = useState(true);
  const [videos, setVideos] = useState([
    {
      id: uuid(),
      titulo: "titulo",
      video: "https://www.youtube.com/watch?v=q0UgClC8md4",
      imagen:
        "https://kinsta.com/es/wp-content/uploads/sites/8/2021/12/front-end-developer-1024x512.png",
      descripcion: "descripcion",
      categoria: "Front End",
    },
    {
      id: uuid(),
      titulo: "titulo",
      video: "https://www.youtube.com/watch?v=q0UgClC8md4",
      imagen:
        "https://kinsta.com/es/wp-content/uploads/sites/8/2021/12/front-end-developer-1024x512.png",
      descripcion: "descripcion",
      categoria: "Front End",
    },
    {
      id: uuid(),
      titulo: "titulo",
      video: "https://www.youtube.com/watch?v=q0UgClC8md4",
      imagen:
        "https://kinsta.com/es/wp-content/uploads/sites/8/2021/12/front-end-developer-1024x512.png",
      descripcion: "descripcion",
      categoria: "Front End",
    },
    {
      id: uuid(),
      titulo: "titulo",
      video: "https://www.youtube.com/watch?v=q0UgClC8md4",
      imagen:
        "https://kinsta.com/es/wp-content/uploads/sites/8/2021/12/front-end-developer-1024x512.png",
      descripcion: "descripcion",
      categoria: "Front End",
    },
    {
      id: uuid(),
      titulo: "titulo",
      video: "https://www.youtube.com/watch?v=q0UgClC8md4",
      imagen:
        "https://www.dongee.com/tutoriales/content/images/2023/01/backend.png",
      descripcion: "descripcion",
      categoria: "Back End",
    },
    {
      id: uuid(),
      titulo: "titulo",
      video: "https://www.youtube.com/watch?v=q0UgClC8md4",
      imagen:
        "https://www.dongee.com/tutoriales/content/images/2023/01/backend.png",
      descripcion: "descripcion",
      categoria: "Back End",
    },
  ]);
  const [categorias, setCategorias] = useState([
    {
      id: uuid(),
      titulo: "Front End",
      color: "#6BD1FF",
      descripcion: "Front End",
    },
    {
      id: uuid(),
      titulo: "Back End",
      color: "#00C86F",
      descripcion: "Front End",
    },
    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      color: "#FF8C2A",
      descripcion: "Front End",
    },
    {
      id: uuid(),
      titulo: "Mobile",
      color: "#FFBA05",
      descripcion: "Front End",
    },
    { id: uuid(), 
      titulo: "UX/UI", 
      color: "#DC6EBE", 
      descripcion: "Front End" },
    {
      id: uuid(),
      titulo: "Infraestructura",
      color: "#9CD33B",
      descripcion: "Front End",
    },
    {
      id: uuid(),
      titulo: "Marketing",
      color: "#6B5BE2",
      descripcion: "Front End",
    },
    {
      id: uuid(),
      titulo: "Data Science",
      color: "#9CD33B",
      descripcion: "Front End",
    },
  ]);

  const mostrarVideoForm = () => {
    setVideoForm(!videoForm);
  };

  const mostrarCategoriaForm = () => {
    setCategoriaForm(!categoriaForm);
  };

  const mostrarBanner = () => {
    setBanner(!banner);
  };

  const registrarVideo = (video) => {
 
  setVideos([...videos, {...video, id: uuid()}])
  };

  const registrarCategoria = (categoria) => {
    setCategorias([...categorias, {...categoria, id: uuid()}]);
  };

  const eliminarVideo = (id) => {
    const nuevoArregloVideo = videos.filter((video) => video.id !== id);
    setVideos(nuevoArregloVideo);
  };

  const eliminarCategoria = (id) => {
    const nuevoArregloCategoria = categorias.filter((categoria) => categoria.id !== id);
    setCategorias(nuevoArregloCategoria);
  };
  return (
    <>
      <Header
        mostrarVideoForm={mostrarVideoForm}
        mostrarBanner={mostrarBanner}
        videoBoton={videoForm}
        videoBotonCategoria={categoriaForm}
      />
      {videoForm === true ? (
        <FormularioVideo
          Mostrarcategoria={categorias.map((categoria) => categoria.titulo)}
          mostrarVideoForm={mostrarVideoForm}
          registrarVideo={registrarVideo}
          categoriaBoton={mostrarCategoriaForm}
          mostrarBanner={mostrarBanner}
        />
      ) : (
        <></>
      )}

      {banner === true ? <Banner /> : <></>}

      {categoriaForm === true ? (
        <FormularioCategoria
          mostrarVideoForm={mostrarVideoForm}
          categoriaBoton={mostrarCategoriaForm}
          registrarCategoria={registrarCategoria}
          categorias={categorias}
          eliminarCategoria={eliminarCategoria}
        />
      ) : (
        <></>
      )}

      {banner ? (
        categorias.map((categoria, i) => {
          return (
            <Carrusel
              videoBoton={videoForm}
              data={categoria}
              key={categoria.id}
              videos={videos.filter(
                (video) => video.categoria === categoria.titulo
              )}
              eliminarVideo={eliminarVideo}
            />
          );
        })
      ) : (
        <></>
      )}

      <Footer />
    </>
  );
}
export default App;
