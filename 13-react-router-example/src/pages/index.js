import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1> Router de Nextjs</h1>
      <ul>
        <li>
          <Link
            href={{
              pathname: "/profile",
              query: { nombre: "Lidi", apellidos: "Garcia" },
            }}
          >
            Profile
          </Link>
        </li>
        <li>
          <Link href={"/nuevaPagina"}>Nueva Pagina</Link>
        </li>
      </ul>
    </>
  );
}
