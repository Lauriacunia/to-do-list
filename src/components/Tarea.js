import React, {useState} from 'react';
import './Tarea.css'

const Tarea = ({ tarea, borrarElementoDelArray }) => {

  const [completada, setCompletada] = useState(false)


  const handleClick = () => {
    setCompletada(true)
  }

  const handleClickBorrar = () => {
    borrarElementoDelArray([1, 2, 3])
  }

  return (
    <>
    <li className={completada ? "completada" : ""}>{tarea}</li> 
    <button onClick={handleClick}>Completar tarea</button>
    <button onClick={handleClickBorrar}>Borrar tarea</button>
    <button>Modificar tarea</button>
  </>
  )
}

export default Tarea;
