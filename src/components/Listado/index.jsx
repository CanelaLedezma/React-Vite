import Elemento from "../Elemento";

import Cita from "./components/Cita/Cita.jsx";

const Listado = ({citas}) => {
  return (
    <div>
      {citas.map(cita => (
        <Cita
          mascota={Cita.mascota}
          dueño={Cita.dueño}
          fecha={Cita.fecha}
          hora={Cita.hora}
          sintomas={Cita.sintomas}
        />
      ))}
    </div>
  );
};

export default Listado;