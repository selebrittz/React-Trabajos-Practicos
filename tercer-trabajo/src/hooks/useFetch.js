import { useEffect, useState } from "react";

//useFetch recibe la url como argumento
export const useFetch = (url) => {
 
    //guardo los estados de date y loading en un solo objeto 
  const [state, setState] = useState({
    data: null, //empieza vacia 
    isLoading: true, //asume que empieza cargando 
    
  });


  const getFetch = async () => {
    try {

      setState({
        //acá el estado de loading empieza en true 
        isLoading: true,
      });

      //hago la petición de la url 
      const resp = await fetch(url);
      const data = await resp.json(); //convierto la resp a json
      console.log(data);

      //esto es para simular que tarda un poco en cargar y poder ver el loading 
      await new Promise((resolve) => setTimeout(resolve, 500));
      
      //una vez que hace todo eso, le muestro la data y apago el loading para q no se vea 
      setState({
        data: data,
        isLoading: false,
      });
    } catch (error) {
      console.log("Error al obtener los personajes", error);
    }
  };

 
  useEffect(() => {
    if (url) {
      getFetch();
    }
  }, [url]); //la ejecución depende de que si hay algun cambio en la url 
  
  return {
    //devuelvo los estados actuales y desestructurados junto con el getFetch
    state,
    ...state,
    getFetch
  };
};