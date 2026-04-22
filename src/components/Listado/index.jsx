import Cita from "../Cita/Cita";

const Listado = ({ citas, eliminarCita }) => {
  return (
    <div>
      {citas.map((cita, index) => (
        <Cita
          mascota={cita.mascota}
          dueño={cita.dueño}
          fecha={cita.fecha}
          hora={cita.hora}
          sintomas={cita.sintomas}
          eliminarCita={() => eliminarCita(index)}
        />
      ))}
    </div>
  );
};

export default Listado;