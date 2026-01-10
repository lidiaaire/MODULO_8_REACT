import React from "react";
import PersonalDataComponent from "../component/PersonalDataComponent";
import PasswordComponent from "../component/PasswordComponent";
import EmailComponent from "../component/EmailComponent";

export default function Home() {
  return (
    <div>
      <PersonalDataComponent />
      <EmailComponent />
      <PasswordComponent />
    </div>
  );
}
