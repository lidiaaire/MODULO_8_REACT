import { getUsers } from "@/api/userFetch";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [users, setUsers] = useState([]); //Usar un useState siempre que vamos a usar la variable dentro del HTML

  useEffect(() => {
    let usersAux = getUsers();
    //IMPORTANTE: Setear la variable de estado users con setUsers con la información que recibimos de la API
    setUsers(usersAux);
  }, []); //Cuando vamos a hacer una carga de datos
  //Siempre debe usar un segundo parámetro en el
  // useEffect como está para que solo se ejecute una vez.

  return (
    <>
      <h1>Gestor de alumnos</h1>
      <ul>
        <li>
          <Link
            href={{
              pathname: "CreateUser",
            }}
          >
            Crear un usuario
          </Link>
        </li>
        <li>
          <Link
            href={{
              pathname: "ContactPage",
            }}
          >
            Contacto
          </Link>
        </li>
      </ul>
      <hr />
      <p>Todos los usuarios</p>
      {
        //Siempre que usemos JavaScript dentro del HTML, debemos usar las llaves
        users.map((user, index) => {
          return (
            <div key={index}>
              <span>{user.id} | </span>
              <span>{user.apellidos} | </span>
              <span>{user.nombre} | </span>
              <span>{user.password} | </span>
              <span>
                <Link
                  href={{
                    pathname: "ProfilePage",
                    query: {
                      id: user.id,
                    },
                  }}
                >
                  Ver perfil del usuario
                </Link>
              </span>
            </div>
          );
        })
      }
    </>
  );
}
