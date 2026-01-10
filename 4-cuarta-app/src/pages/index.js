import React from "react";
import InfoComponent from "../components/InfoComponent.jsx";
import NameComponent from "../components/NameComponent.jsx";

export default function Home() {
  const getPokemonInfo = () => {
    return {
      nombrePokemon: "Charizard",
      descripcionPokemon:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tipo: ["fuego", "tierra"],
    };
  };

  const pokemonInfo = getPokemonInfo();

  return (
    <>
      <NameComponent name={pokemonInfo.nombrePokemon} />
      <InfoComponent
        descr={pokemonInfo.descripcionPokemon}
        tipos={pokemonInfo.tipo}
      />
    </>
  );
}
