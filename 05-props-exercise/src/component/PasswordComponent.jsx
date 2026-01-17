import React from "react";
import { useState } from "react";

export default function PasswordComponent() {
  const [password, setPassword] = useState("");

  const changePasswordHandler = (e) => {
    if (e.target.value.length > 8) {
      console.log("No es mayor de 8 caracteres");
    }

    setPassword(e.target.value);
  };
  return (
    <div>
      <span>Password</span>
      <input
        type="password"
        value={password}
        onChange={changePasswordHandler}
      ></input>
    </div>
  );
}
