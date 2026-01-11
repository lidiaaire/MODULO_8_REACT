import React, { useState } from "react";

export default function UserComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h2>User</h2>

      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>El nombre actual es: {name}</p>

      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
  );
}
