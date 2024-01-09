import React from 'react';
import '../css/tarea.css';
import { AiOutlineCloseCircle } from "react-icons/ai"; 
// npx install react-icons --save
// importar icononos con el nombre del icono

function Tarea({ texto, completada }) {
    return (
        <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
            {/**condicional para ver si esta lista la tarea, si es verdadero ejecuta las dos clases si no la uníca clase */}
            <div className='tarea-texto'>
                {texto}
            </div>
            <div className='tarea-contenedor-iconos'>
                <AiOutlineCloseCircle className='tarea-icono' />
                {/**paso el icono como si fuera un componente */}
                 {/**utilizo props como clasepara el stilo  */}
            </div>
        </div>
    );
}

export default Tarea;