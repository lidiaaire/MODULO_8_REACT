import React, { useState } from "react";

export default function EmailComponent() {
  const [emailVar, setEmailVar] = useState("");

  return (
    <div>
      <span>Email</span>
      <input
        type="email"
        value={emailVar}
        onChange={(e) => setEmailVar(e.target.value)}
      />
    </div>
  );
}
