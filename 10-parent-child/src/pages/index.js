import ComponenteHijo from "@/components/ComponenteHijo/ComponenteHijo";
import React from "react";
import { useState } from "react";

export default function Home() {
  const [saludo, setSaludo] = useState("");
  const [saludoHijo, setSaludoHijo] = useState("");

  const saludar = (param1) => {
    setSaludo("Hola desde el padre");
  };

  const saludarDesdeHijo = (mensajeDeSaludo) => {
    setSaludoHijo(mensajeDeSaludo);
  };

  return (
    <>
      <div>
        <h1>Componente Padre</h1>
        <button onClick={saludar}> Saluda al hijo</button>
        <p>{saludoHijo}</p>
      </div>
      <hr />
      <div>
        <ComponenteHijo
          saludoParam={saludo}
          saludarDesdeHijoFn={saludarDesdeHijo}
        />
      </div>
    </>
  );
}
