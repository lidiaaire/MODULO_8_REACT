import { useState } from "react";

export default function AlumnoInfoComponent(props) {
  const { nombreAlumno, emailAlumno, counterAlumnosPagados } = props;

  const [pagado, setPagado] = useState(false);

  const pagarHandler = () => {
    setPagado(true);
    counterAlumnosPagados();
  };

  return (
    <div className="alumno">
      <div>
        <div>
          <span>Nombre alumno: {nombreAlumno}</span>
        </div>
        <div>
          <span>Email alumno: {emailAlumno}</span>
        </div>
        <div>
          {pagado ? <span>Si ha pagado</span> : <span>No ha pagado</span>}
        </div>
      </div>

      <div>
        {!pagado && <button onClick={pagarHandler}>Alumno va a pagar</button>}
      </div>

      <div>
        <button onClick={() => {}}>Otra función</button>
      </div>
    </div>
  );
}
