import { useState, useEffect } from "react";
import AlumnoInfoComponent from "../components/AlumnosInfoComponent/AlumnoInfoComponent.jsx";
import { getAlumnos } from "./api/alumnos.js";

export default function Home() {
  // Estados
  const [alumnos, setAlumnos] = useState([]);
  const [counterAlumnosQuePagan, setCounterAlumnosQuePagan] = useState(0);
  const [todosPagados, setTodosPagados] = useState(false);
  const [tmpVar, setTmpVar] = useState("");

  // Cargar alumnos al iniciar la app
  useEffect(() => {
    const alumnosAux = getAlumnos();
    // eslint-disable-next-line
    setAlumnos(alumnosAux);
  }, []);

  // Comprobar si todos han pagado
  useEffect(() => {
    console.log("Se ejecuta el useEffect");

    if (alumnos.length > 0 && counterAlumnosQuePagan >= alumnos.length) {
      console.log("Se ejecuta el useEffect y entra en if");
      // eslint-disable-next-line
      setTodosPagados(true);
    } else {
      setTodosPagados(false);
    }
  }, [counterAlumnosQuePagan, alumnos]);

  // Handlers
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
        <input value={tmpVar} onChange={changeInputHandler} />
      </div>

      <h2>
        {todosPagados
          ? "Todos los alumnos han pagado"
          : "No todos los alumnos han pagado"}
      </h2>

      <div>
        {alumnos.map((alumno) => (
          <AlumnoInfoComponent
            key={alumno.id}
            nombreAlumno={alumno.nombre}
            emailAlumno={alumno.email}
            counterAlumnosPagados={counterAlumnosPagados}
          />
        ))}
      </div>
    </>
  );
}
