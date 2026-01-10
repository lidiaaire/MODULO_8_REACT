export default function Home() {
  const today = new Date().toLocaleDateString("es-ES");

  return (
    <div>
      <h1>Hola Lidia, hoy es {today}</h1>
    </div>
  );
}
