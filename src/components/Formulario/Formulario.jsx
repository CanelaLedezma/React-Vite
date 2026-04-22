import { useState } from "react";

function Formulario({agregarCita}) {

  const [mascota, setMascota] = useState("");
  const [dueño, setDueño] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [sintomas, setSintomas] = useState("");

  const agregar = () => {
    agregarCita({
      mascota,
      dueño,
      fecha,
      hora,
      sintomas
    });

    setMascota("");
    setDueño("");
    setFecha("");
    setHora("");
    setSintomas("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Mascota"
        value={mascota}
        onChange={(e) => setMascota(e.target.value)}
      />

      <input
        type="text"
        placeholder="Dueño"
        value={dueño}
        onChange={(e) => setDueño(e.target.value)}
      />

      <input
        type="date"
        value={fecha}
        onChange={(e) => setFecha(e.target.value)}
      />

      <input
        type="time"
        value={hora}
        onChange={(e) => setHora(e.target.value)}
      />

      <textarea
        placeholder="Síntomas"
        value={sintomas}
        onChange={(e) => setSintomas(e.target.value)}
      ></textarea>

      <button onClick={agregar}>Agregar cita</button>
    </div>
  );
}

export default Formulario;