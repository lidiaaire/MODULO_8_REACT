import React, { useState } from "react";

export default function PersonalDataComponent() {
  const [name, setName] = useState("");

  const changeNameHandler = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <div>
        <span>Nombre</span>
        <input type="text" value={name} onChange={changeNameHandler} />
      </div>

      <div>
        <p>El nombre actual es: {name}</p>
      </div>
    </div>
  );
}
