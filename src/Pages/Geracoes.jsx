import React, { useEffect, useState } from "react";
import api from "../servicos/api";

export default function Home() {
  const [pokemons, setPokemon] = useState([]);
  const [geracoes, setGeracao] = useState([1,2,3,4,5,6,7,8]);
  const [variavelProximo, setProximo] = useState(2);
  const [variavelTipos, setRegiao] = useState(0);



  useEffect(() => {
    api
      .get("/pokemon/lista")
      .then((response) => setPokemon(response.data.pokemon))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);
  const fetchQuotes = (variavel) => {

    setProximo(2)
    setRegiao(variavelTipos -1)

    try {

      const res =
        api
          .get("/pokemon/lista/" + variavel)
          .then((response) => setPokemon(response.data.pokemon))

          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
      // Set the response to the state.


    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div className="App">
        <div className="flex">
          {geracoes?.map((geracoe) => <li key={geracoe} className='m-auto cursor-pointer list-none hover:text-red-600' onClick={() => fetchQuotes(geracoe)}> Geraçao {geracoe}</li>)}
        </div>
        <div>
          {pokemons?.map((pokemon) => <div key={pokemon.numero}
            className='flex ml-10 mr-10 cursor-pointer list-none hover:text-red-600 h-auto border-2 border-indigo-500/100 text-center justify-center'
          >
            <li>{pokemon.numero}-</li>
            <li>{pokemon.nome}</li>
            <img src={pokemon.img} className='h-8'></img>
          </div>)}

        </div>
    </div>
  )
}