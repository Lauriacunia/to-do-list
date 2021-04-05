import React, {useState} from 'react';
import './Tarea.css'

const Tarea = ({ tarea, id, borrarElementoDelArray, modificarElementoDelArray }) => {

  const [completada, setCompletada] = useState(false)
  const [modoEditar, setModoEditar] = useState(false);
  const [valorDelInputModificar, setValorDelInputModificar] = useState('');

  const handleClick = () => {
    setCompletada(true)
  }

  const handleClickBorrar = (e) => {
    borrarElementoDelArray(id)
  }

  const handleClickModificar = () => {
    setModoEditar(true);
  }
  const handleClickOk = (e) => {
    modificarElementoDelArray(valorDelInputModificar, id)
    setModoEditar(false)
  }
  const handleChangeModificar = (e) => {
    setValorDelInputModificar(e.target.value);
  }

  return (
    <>
    {
    modoEditar
    ? <div><input onChange={handleChangeModificar}/> <button onClick={handleClickOk}>ok</button></div>
    : <li className={completada ? "completada" : ""}>{tarea}</li>
    } 
    <button onClick={handleClick}>Completar tarea</button>
    <button onClick={handleClickBorrar}>Borrar tarea</button>
    <button onClick={handleClickModificar}> Modificar tarea</button>
  </>
  )
}

export default Tarea;
