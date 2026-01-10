export default function InfoComponent(props) {
  return (
    <div>
      <p>{props.descr}</p>

      <ul>
        {props.tipos.map((tipo, index) => {
          return (
            <li key={index} className={tipo === "fuego" ? "fuego" : "tierra"}>
              {tipo}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
