import { deleteUserById } from "@/api/userFetch";
import ChangePassword from "@/components/ChangePassword";
import UserDetails from "@/components/UserDetails";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function ProfilePage() {
  //IMPORTANTE: la importación y el uso de useRouter()!!!!!!!!!!!!!!!!!!
  //Esto nos sirve para obtener los datos que le pasamos en el query del href del Link en el index.jsx
  const router = useRouter(); //La importación debe ser de next/router
  const { id } = router.query;

  const deleteUser = () => {
    deleteUserById(id);

    //router.back() nos lleva hacia la pantalla anterior!!!
    // Al eliminar un usuario, queremos que nos devuelva a la página de inicio
    router.back();
  };

  return (
    <div>
      <h1>Página de profile</h1>
      <UserDetails userId={id} />
      <ChangePassword userId={id} />
      <div>
        <button onClick={deleteUser}>Eliminar usuario</button>
      </div>
      <Link
        href={{
          pathname: "/",
        }}
      >
        Home
      </Link>
    </div>
  );
}
