import { useCounter } from "./hooks/useCounter";
import { useFetch } from "./hooks/useFetch";
import { Loading } from "./components/Loading";
import { CharacterInfo } from "./components/CharacterInfo";
import "./App.css";

export const App = () => {
  const { counter, handleIncrement, handleDecrement } = useCounter(1);
  const url = `https://thesimpsonsapi.com/api/characters/${counter}`;
  const { data, isLoading, error } = useFetch(url);

  return (
    <>
      <h1>Personajes de Los Simpsons</h1>
      <hr />

      {isLoading ? (
        <Loading />
      ) : error ? (
        <p className="error-message">Error: {error}</p>
      ) : data ? (
        <CharacterInfo data={data} />
      ) : null}

      <div className="navigation-buttons">
        <button
          onClick={() => handleDecrement(1)} //le digo a la funcion que vaya de menos 1 en menos 1
          disabled={isLoading || counter === 1} //deshabilito el decremento si es que está cargando o si está en 1
        >
          Anterior
        </button>

        <button
          onClick={() => handleIncrement(1)} //le digo a la funcion que vaya de mas uno en mas uno (cada que que el user hace click )
          disabled={isLoading} // Deshabilitado solo si está cargando
        >
          Siguiente
        </button>
      </div>
    </>
  );
};

export default App;
