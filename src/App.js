/* eslint-disable jsx-a11y/alt-text */
import './App.css';
import logo from './img/logo192.png';
import Tarea from './componentes/Tarea';

function App() {
  return (
    <div className="app-tareas">
      <div className='logo-contenedor'>
        <img src={logo} className='logo' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <Tarea texto='Aprender React'/>
      </div>
    </div>
  );
}

export default App;
