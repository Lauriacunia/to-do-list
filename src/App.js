import React, { useState } from 'react';
import Tarea from './components/Tarea';


const App = () => {
  const [valorDelInput, setValorDelInput] = useState('');
  const  [mostarTarea, setMostarTarea] = useState(true);
  const  [mostarError, setMostarError] = useState(false);
  const [lista, setLista] = useState([
    'Lavar ropa',
    'Corregir TPS',
    'Desarmar cajas',
    'Cepillar gatos',
    'Insultar a Pepo',
    'Putear a d1sn3y mientras mando CVs a otras empresas',
  ])


  const borrarElementoDelArray = (indice) => {

    const nuevaLista = [...lista ]
    nuevaLista.splice(indice, 1) // borra el elemento por su indice
    console.log(nuevaLista)
    setLista(nuevaLista)

   // setLista([...lista].filter(elemento => elemento !== tarea)  // si pasase tarea como param
  }

  const modificarElementoDelArray = (tareaNueva, id) => {
    console.log(tareaNueva, id)
    const nuevaLista = [...lista ]
    nuevaLista.splice(id, 1, tareaNueva) // borra el elemento por su indice y en su lugar agrega la nueva tarea
    console.log(nuevaLista)
    setLista(nuevaLista)

  }

  const handleClick = () => {
    valorDelInput && setLista([ ...lista, valorDelInput ]) // crea una copia segura del array original 
    // y le agrega en nuevo input de la nueva tarea
    valorDelInput || setMostarError(true)
    setValorDelInput("") // reseatea el input
  };

  const handleChange = e => {
    setMostarError(false)
    // en la funcion setState se pasa *el nuevo valor de la variabke*
    setValorDelInput(e.target.value);
  };

  // En el handle click tenemos en el console.log el valor del input,
  // la tarea que el usuario quiere agregar
  // TU MISION, SI DESEAS ACEPTARLA, es lograr que esa tarea se vea en la lista
  // con todas las demas.


  return (
    <div>

      <ul>
        {lista.map((tarea, i) => (
          mostarTarea && <Tarea 
            key={i} 
            id={i}
            tarea={tarea} 
            borrarElementoDelArray={borrarElementoDelArray}
            modificarElementoDelArray={modificarElementoDelArray}
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
      {mostarError && <h3>No podes ingresar una lista vacía</h3>}
    </div>
  );
};

export default App;
