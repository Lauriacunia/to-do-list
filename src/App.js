import React, { useState } from 'react';
import Tarea from './components/Tarea';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'

const App = () => {
  const [valorDelInput, setValorDelInput] = useState('');
  const [lista, setLista] = useState([
    'Lavar ropa',
    'Corregir TPS',
    'Desarmar cajas',
    'Cepillar gatos',
    'Insultar a Pepo',
    'Putear a d1sn3y mientras mando CVs a otras empresas',
  ])


  const borrarElementoDelArray = (param) => {
    // aqui borramos un elemento del array
    console.log("estoy en la funcion borrar elemento del array y el parametro que me mandaron es", param)
  }

  const handleClick = () => {
    setLista([ ...lista, valorDelInput ]) // a fuego guardarse esto
    setValorDelInput("")
  };

  const handleChange = e => {
    // en la funcion setState se pasa *el nuevo valor de la variabke*
    setValorDelInput(e.target.value);
  };

  // En el handle click tenemos en el console.log el valor del input,
  // la tarea que el usuario quiere agregar
  // TU MISION, SI DESEAS ACEPTARLA, es lograr que esa tarea se vea en la lista
  // con todas las demas.


  return (
    <div>
    {/* <FontAwesomeIcon icon={faStar} /> */}

      <ul>
        {lista.map((tarea, i) => (
          <Tarea 
            key={i} 
            tarea={tarea} 
            borrarElementoDelArray={borrarElementoDelArray}
            />
        ))}
      </ul>

      <label>
        Agregar tarea...
        <input
          value={valorDelInput}
          onChange={handleChange}
          type="text"
          placeholder="Por ej, putear a Pepo"
        />
      </label>
      <button onClick={handleClick}>Agregar tarea</button>
    </div>
  );
};

export default App;
