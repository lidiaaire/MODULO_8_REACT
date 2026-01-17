import AlumnoInfoComponent from "../components/AlumnosInfoComponent/AlumnoInfoComponent";
import { getAlumnos } from "./api/alumnos";
import { useState } from "react";

export default function Home() {
  const alumnos = getAlumnos();
  const [counterAlumnosQuePagan, setCounterAlumnosQuePagan] = useState(0);
  const todosPagados = counterAlumnosQuePagan === alumnos.length;
  const [tmpVar, setTmpVar] = useState("");

  const counterAlumnosPagados = () => {
    setCounterAlumnosQuePagan((prev) => prev + 1);
  };

  const changeInputHandler = (e) => {
    setTmpVar(e.target.value);
  };

  return (
    <>
      <div>
        <h1>La mejor clase de la historia de CodeSpaces</h1>
        <h3>Mis chavalitos y mis chavalitas</h3>
      </div>
      <div>
        <input value={tmpVar} onChange={changeInputHandler}></input>
      </div>

      {
        <h2>
          {todosPagados
            ? "Todos los alumnos han pagado"
            : "No todos los alumnos han pagado"}
        </h2>
      }

      {alumnos.map((alumno, index) => (
        <AlumnoInfoComponent
          key={index}
          nombreAlumno={alumno.nombre}
          emailAlumno={alumno.email}
          counterAlumnosPagados={counterAlumnosPagados}
        />
      ))}
    </>
  );
}
