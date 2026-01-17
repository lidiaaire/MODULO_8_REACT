import React from "react";
import { useState, useEffect } from "react";

export default function Home() {
  const [example, setExample] = useState("");
  const [example2, setExample2] = useState("");

  const onChangeInputHandler = (e) => {
    setExample(e.target.value);
  };

  const onChangeInputHandler2 = (e) => {
    setExample2(e.target.value);
  };

  useEffect(() => {
    console.log("Yo solo me ejecuto una vez al cargar");
  }, []);

  useEffect(() => {
    console.log("Yo solo me ejecuto cuando se modifica la variable example");
  }, [example]);

  useEffect(() => {
    console.log("Yo me ejecuto siempre");
  });

  return (
    <>
      <h1>Ejemplo useEffect</h1>
      <hr />
      <input value={example} onChange={onChangeInputHandler} />
      <input value={example2} onChange={onChangeInputHandler2} />
    </>
  );
}
