import { getUserById } from "@/api/userFetch";
import React, { useEffect, useState } from "react";

export default function UserDetails({ userId }) {
  //const {userId} = props //Hacemos el destructuring entre los paréntesis
  const [userLocal, setUserLocal] = useState({});

  useEffect(() => {
    let userAux = getUserById(userId); //Esto devuelve un objeto user!!
    setUserLocal(userAux);
  }, []);

  //El segundo parámetro del useEffect() tiene que ser un array vacío porque es una carga de datos!!

  return (
    <div>
      <h2>Componente UserDetails</h2>
      <br />
      <div>
        <span>Nombre: {userLocal.nombre}</span>
      </div>
      <div>
        <span>Apellidos: {userLocal.apellidos}</span>
      </div>
    </div>
  );
}
