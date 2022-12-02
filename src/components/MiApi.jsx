import { useState, useEffect } from "react";

const MiApi = () => {
  const [informacion, setInformacion] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    llamadoApi();
  }, []);

  const llamadoApi = async () => {
    try {
      const url = "https://api.victorsanmartin.com/feriados/en.json";
      const respuesta = await fetch(url);
      const datos = await respuesta.json();
      setInformacion(datos.data);
    } catch (err) {
      alert("Ups! Algo salio mal, inténtalo nuevamente más tarde");
    }
  };

  const listaFeriado = !busqueda
    ? informacion
    : informacion.filter((e) =>
        e.extra.toLowerCase().includes(busqueda.toLocaleLowerCase())
      );

  const ordenando = () => {
    const ordenaferiado = [...listaFeriado].sort((a, b) =>
      a.title > b.title ? 1 : -1
    );
    setInformacion(ordenaferiado);
  };

  return (
    <div className="max-h-max" id="miApi">
      <section className="h-20 flex justify-evenly content-center p-20">
        <label htmlFor="busqueda" className="buscador-label h-8 m-0 ">
          Filtre feriados civiles o religiosos:
        </label>
        <input
          className="h-8 rounded bg-violet-800"
          type="text"
          name="busqueda"
          placeholder="buscar..."
          onChange={(e) => {
            setBusqueda(e.target.value);
          }}
          value={busqueda}
        />
      </section>
      <article className="mx-56">
        <h1 className="my-2.5 text-violet-800  tracking-tight text-4xl font-extrabold">
          Lista de fechas:
        </h1>
        <h2 className="list-none">
          {listaFeriado.map((feriado) => (
            <li key={feriado.title}>
              {feriado.date} {feriado.title}
            </li>
          ))}
        </h2>
        <button
          className="btn bg-violet-800 border-transparent m-10"
          onClick={ordenando}
        >
          mostar por orden alfabético
        </button>
      </article>
    </div>
  );
};
export default MiApi;
