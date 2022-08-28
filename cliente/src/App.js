import logo from './logo.svg';
import './App.css';
import {Col, Container, Row} from 'reactstrap';
import MainProyectos from './Componentes/MainProyectos';
import { Link, Route, Routes } from 'react-router-dom';
import Formulario from './Componentes/Proyectos/Formulario';
import Swal from 'sweetalert2';
import { useState } from 'react';
import axios from 'axios';

function App() {

  const [datos, setDatos] = useState([]);
  const [recargar, setRecargar] = useState(false); //Para Actualizar los datos
  
  //Función para Crear
  const CrearProyecto = (obj) => {

    return axios.post('http://localhost:8000/api/v1/proyectos', obj)
      .then(resp => {
        if(!resp.data.error){
          setDatos([...datos, resp.data.datosJug]);
          Swal.fire('','Se ha creado el proyecto','success');
          return true;
        }else{
          Swal.fire('','No pudimos crear el proyecto', 'error');
          return false;
        }        
      })
  }

  return (
    <Container>      
      <Routes>          
          <Route path="/*" element={<MainProyectos />}></Route>
          <Route path='crear' element={<Formulario CrearProyectoFn={CrearProyecto}></Formulario>}></Route>
        </Routes>
    </Container>
  );
}

export default App;
