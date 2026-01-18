import React from "react";
import { useRouter } from "next/router";

export default function Profile() {
  const router = useRouter();
  const { nombre, apellidos } = router.query;
  return (
    <div>
      <h2> Pagina de profile</h2>
      <span>
        {nombre} {apellidos}
      </span>
    </div>
  );
}
