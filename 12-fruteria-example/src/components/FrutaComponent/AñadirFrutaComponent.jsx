import React from "react";
import { useState } from "react";

export default function AñadirFrutaComponent(props) {
  const { guardarFruta } = props;
  const [id, setId] = useState();
  const [nombre, setNombre] = useState("");
  const [precioKg, setPrecioKg] = useState(0);
  const [origen, setOrigen] = useState("");

  const changeIdHandler = (e) => {
    console.log(e.target.value);
    setId(e.target.value);
  };

  const changeNombreHandler = (e) => {
    setNombre(e.target.value);
  };

  const changePrecioKgHandler = (e) => {
    setPrecioKg(e.target.value);
  };

  const changeOrigenHandler = (e) => {
    setOrigen(e.target.value);
  };

  const guardar = () => {
    guardarFruta({
      id: id,
      nombre: nombre,
      precioKg: precioKg,
      origen: origen,
    });
  };

  return (
    <div>
      <h1>Añadir Fruta Component</h1>

      <div>
        <span>id: </span>
        <input type="number" value={id} onChange={changeIdHandler} />
      </div>

      <div>
        <span>Nombre: </span>
        <input type="text" value={nombre} onChange={changeNombreHandler} />
      </div>

      <div>
        <span>Precio por Kg: </span>
        <input
          type="number"
          value={precioKg}
          onChange={changePrecioKgHandler}
        />
      </div>

      <div>
        <span>Origen: </span>
        <input type="text" value={origen} onChange={changeOrigenHandler} />
      </div>

      <div>
        <button onClick={guardarFruta}>Guardar fruta</button>
      </div>
    </div>
  );
}
