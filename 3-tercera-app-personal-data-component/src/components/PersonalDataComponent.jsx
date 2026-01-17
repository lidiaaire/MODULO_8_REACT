import React from "react";

export default function PersonalDataComponent() {
  return (
    <div>
      <div>
        <span>Nombre</span>
        <input type="text" value={`Mi nombre`}></input>
      </div>
    </div>
  );
}
