import React from "react";

export default function FrutaComponent(props) {
  const { id, nombreFruta, precioKg, origen, eliminarFruta } = props;

  const deleteFrutaHandler = () => {
    eliminarFruta(id);
  };

  return (
    <div>
      <span>Id: {id} | </span>
      <span>Nombre Fruta: {nombreFruta} | </span>
      <span>Precio por kg: {precioKg} | </span>
      <span>Origen: {origen} | </span>

      <button onClick={deleteFrutaHandler}>Eliminar </button>
    </div>
  );
}
