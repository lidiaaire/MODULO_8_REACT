import React from "react";
import PersonalDataComponent from "../components/PersonalDataComponent";
import EmailComponent from "../components/EmailComponent";
import PasswordComponent from "../components/PasswordComponent";

export default function Home() {
  return (
    <>
      <PersonalDataComponent />
      <EmailComponent />
      <PasswordComponent />
    </>
  );
}
