import { addUser } from "@/api/userFetch";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function CreateUser() {
  //IMPORTANTE: la importación y el uso de useRouter()!!!!!!!!!!!!!!!!!!
  //Esto nos sirve para obtener los datos que le pasamos en el query del href del Link en el index.jsx
  //Pero también nos sirve para poder movernos entre páginas!!
  // En este caso, al querer volver a la pantalla de inicio tras crear un usuario,
  // Nos volvemos a la pantalla de inicio
  const router = useRouter(); //La importación debe ser de next/router

  const [id, setId] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [password, setPassword] = useState("");

  const idHandler = (e) => {
    setId(e.target.value);
  };

  const nombreHandler = (e) => {
    setNombre(e.target.value);
  };

  const apellidosHandler = (e) => {
    setApellidos(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const addUserClick = () => {
    addUser(id, nombre, apellidos, password);
    router.back();
  };

  return (
    <div>
      <h1>Página de creación de usuario</h1>
      <br />
      <div>
        <div>
          <span>Id</span>
          <input type="text" value={id} onChange={idHandler} />
        </div>
        <div>
          <span>Nombre</span>
          <input type="text" value={nombre} onChange={nombreHandler} />
        </div>
        <div>
          <span>Apellidos</span>
          <input type="text" value={apellidos} onChange={apellidosHandler} />
        </div>
        <div>
          <span>Password</span>
          <input type="text" value={password} onChange={passwordHandler} />
        </div>
        <div>
          <button onClick={addUserClick}>Crear usuario</button>
        </div>
        <Link
          href={{
            pathname: "/",
          }}
        >
          Home
        </Link>
      </div>
    </div>
  );
}
