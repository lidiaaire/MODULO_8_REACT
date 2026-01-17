import React from "react";
import { useState } from "react";

export default function AlumnoInfoComponent(props) {
  const { nombreAlumno, emailAlumno } = props;

  // Vamos a crear unas variables de estados
  // Con las que vamos a ver si un alumno a pagado o no
  // Y ademas poder marcar al usuario como que ha pagado
  const [pagado, setPagado] = useState(false);

  const pagarHandler = () => {
    setPagado(true);
    props.counterAlumnosPagados();
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
        <button onClick={() => {}}>Otra funcion</button>
      </div>
    </div>
  );
}
