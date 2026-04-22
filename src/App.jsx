import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import "./App.css";
import Formulario from "./components/Formulario/Formulario.jsx";
import Listado from "./components/Listado";

function App() {

const [citas, setCitas] = useState([
  {
    mascota: "Nina",
    dueño: "Martin",
    fecha: "2021-08-05",
    hora: "08:20",
    sintomas: "Le duele la pierna"
  },
  {
      mascota: "Sifon",
      dueño: "Flecha",
      fecha: "2023-08-05",
      hora: "09:24",
      sintomas: "Duerme mucho"
    },
  {
      mascota: "Floki",
      dueño: "Ari",
      fecha: "2023-08-05",
      hora: "16:15",
      sintomas: "No está comiendo"
    }
]);
  
const eliminarCita = (index) => {
  const nuevasCitas = citas.filter((_, i) => i !== index);
  setCitas(nuevasCitas);
  
};

  const agregarCita = (nuevaCita) => {
  setCitas(prevCitas => [...prevCitas, nuevaCita]);
};

  return (
    <section id="center">

      <h1>Administrador de Pacientes</h1>
      
      <Formulario agregarCita={agregarCita} />
<Listado citas={citas} eliminarCita={eliminarCita} />
    </section>
  );
}

export default App;