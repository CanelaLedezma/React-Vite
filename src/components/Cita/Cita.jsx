import "./Cita.css";

function Cita({ mascota, dueño, fecha, hora, sintomas, eliminarCita }) {
  return (
    <div className="cita">
      <p>Mascota: {mascota}</p>
      <p>Dueño: {dueño}</p>
      <p>Fecha: {fecha}</p>
      <p>Hora: {hora}</p>
      <p>Síntomas: {sintomas}</p>

      <button onClick={eliminarCita}>Eliminar ×</button>
    </div>
  );
}

export default Cita;