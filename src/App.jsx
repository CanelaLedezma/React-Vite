import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import "./App.css";
import Formulario from "./components/Formulario/Formulario.jsx";
import Listado from "./components/Listado";

function App() {

  const citas = [
    {
      mascota: "Firulais",
      dueño: "Juan",
      fecha: "10/06/2026",
      hora: "10:30",
      sintomas: "No come"
    }
  ];

  return (
    <section id="center">

      <h1>Administrador de Pacientes</h1>

      <Formulario />

      <Listado citas={citas} />

    </section>
  );
}

export default App;