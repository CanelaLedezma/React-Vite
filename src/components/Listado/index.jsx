import Cita from "../Cita/Cita";

const Listado = ({ citas }) => {
  return (
    <div>
      {citas.map(cita => (
        <Cita
          mascota={cita.mascota}
          dueño={cita.dueño}
          fecha={cita.fecha}
          hora={cita.hora}
          sintomas={cita.sintomas}
        />
      ))}
    </div>
  );
};

export default Listado;