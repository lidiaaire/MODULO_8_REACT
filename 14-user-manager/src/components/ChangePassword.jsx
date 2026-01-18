import { modifyPassword } from "@/api/userFetch";
import React from "react";
import { useState } from "react";

export default function ChangePassword({ userId }) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setPasswordConfirm] = useState("");
  const [error, setError] = useState(false);

  const onChangePasswordHandle = (e) => {
    setPassword(e.target.value);
  };
  const onChangeConfirmPasswordHandle = (e) => {
    setPasswordConfirm(e.target.value);
  };

  const changePassword = () => {
    if (password === confirmPassword) {
      modifyPassword(userId, password);
      setError(false);
    } else {
      setError(true); //Dar mensaje de password incorrecta
    }
  };

  return (
    <div>
      <h2>Component Change password</h2>
      <div>
        <label>Contrasenya nueva</label>
        <input
          type="password"
          value={password}
          onChange={onChangePasswordHandle}
        />
      </div>
      <br />
      <div>
        <label>Confirmar Contrasenya nueva</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={onChangeConfirmPasswordHandle}
        />
      </div>
      <div>
        <button onClick={changePassword}>Cambiar contraseña</button>
      </div>
      <br />
      {error ? (
        <div>
          <span>Error: Las contraseñas NO son iguales</span>
        </div>
      ) : null}
    </div>
  );
}
