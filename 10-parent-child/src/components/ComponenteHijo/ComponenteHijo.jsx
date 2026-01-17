import React from "react";

export default function ComponenteHijo(props) {
  const { saludoParam, saludarDesdeHijoFn } = props;

  const saludarAPadre = () => {
    saludarDesdeHijoFn("Saludos desde el hijo");
  };

  return (
    <div>
      <h2>Componente Hijo</h2>
      <div>
        <span>{saludoParam}</span>
      </div>
      <button onClick={saludarAPadre}> Saluda al padre</button>
    </div>
  );
}
