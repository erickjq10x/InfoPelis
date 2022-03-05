import { useEffect, useState } from "react";
import axios from "axios";

const API = 'https://imdb-api.com/en/API/Top250Movies/k_bcxumu4f'
const useTopMoviesHelper = () => {
    const [movies, setMovies] = useState()
    const data = axios(API)
    
    //prueba para ver si funciona la api
    useEffect( () =>{
      console.log(movies)
    }, [movies])
    const hola = () => {
      setMovies(data.data)
    }




    // const changePage = (page) =>{  //aca cambio el contenido segun la pagina
    //   switch (page) {
    //     case "":
          
    //       break;
      
    //     default:
    //       break;
    //   }
    // }
    return {hola}
}

export default useTopMoviesHelper