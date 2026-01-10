import React from "react";

export default function NameComponent(props) {
  const pokemonName = props.name;

  return (
    <div>
      <h1>{pokemonName}</h1>
    </div>
  );
}
