function Formulario() {
  return (
    <form>
      <input type="text" placeholder="Mascota" />
      <input type="text" placeholder="Dueño" />
      <input type="date" placeholder="Feccha"/>
      <input type="time" placeholder="Hora" />
      <textarea placeholder="Síntomas"></textarea>

      <button>Agregar cita</button>
    </form>
  );
}

export default Formulario;