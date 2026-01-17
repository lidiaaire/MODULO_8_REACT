import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import FrutaComponent from "../components/FrutaComponent/FrutaComponent";
import AñadirFrutaComponent from "../components/FrutaComponent/AñadirFrutaComponent";
import { getFrutas } from "@/api/apiFetch";

export default function Home() {
  const [listaFrutas, setListaFrutas] = useState([]);

  const getFrutaFromApi = () => {
    let frutasAux = getFrutas();
    setListaFrutas(frutasAux);
  };

  const eliminarFruta = (id) => {
    let eliminarFrutaAux = [...listaFrutas];
    const nuevaListaFruta = eliminarFrutaAux.filter((fruta) => fruta.id != id);
    setListaFrutas(nuevaListaFruta);
  };

  const guardarFruta = (frutaParam) => {
    let frutaAux = [...listaFrutas];
    frutaAux.push(frutaParam);
    setListaFrutas(frutaAux);
  };

  useEffect(() => {
    // eslint-disable-next-line
    getFrutaFromApi();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Tienda de fruta</h1>
        </div>
        <div className={styles.body}>
          <div className={styles.listadoFrutas}>
            {listaFrutas.map((fruta, index) => {
              return (
                <FrutaComponent
                  key={index}
                  id={fruta.id}
                  nombreFruta={fruta.nombre}
                  precioKg={fruta.precioKg}
                  origen={fruta.origen}
                  eliminarFruta={eliminarFruta}
                />
              );
            })}
          </div>
          <hr />
          <div className={styles.añadirFrutas}>
            <AñadirFrutaComponent guardarFruta={guardarFruta} />
          </div>
        </div>
      </div>
    </>
  );
}
