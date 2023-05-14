import React from 'react';
import './App.css';
import  { useState } from 'react';
window.document.title= 'Seccion';

//Crea una aplicación que mueste y oculte una sección de texto al hacer clic en un botón.

export default function Seccion() {

  const [visible, setVisible] = useState(false);
  
  const Alternar = () => {
    setVisible(!visible);
  };
  return (
    <div>
      <h1>React</h1>
      <button onClick={Alternar}>
        {visible ? 'Ocultar' : 'Mostrar'} texto
      </button>
      {visible && (
        <p>
          React es una biblioteca javascript de código abierto diseñada para crear interfaces de usuario
          con el objetivo de facilitar el desarrollo de aplicaciones en una sola página.
          Es mantenido por Facebook y la comunidad de software libre. 
          En el proyecto hay más de mil desarrolladores libres.
        </p>
      )}
    </div>
  );
}