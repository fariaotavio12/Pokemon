import React, { useEffect, useState, useCallback } from "react";
import api from "../servicos/api";

export default function Home() {
  const [regioes, setUser] = useState([]);
  const [pokemons, setPokemon] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      await api
        .get("/regioes")
        .then((response) => setUser(response.data.regioes))
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });
    }
    const loadData1 = async () => {
      await api
        .get("/pokemon/regiao/" + 'kanto' + "/20/1")
        .then((response) => setPokemon(response.data.pokemon))
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });
    }
    loadData()
    loadData1()
    console.log(pokemons)
  }, []);



  // useEffect(() => {
  //   api
  //     .get("/pokemon/regiao/" + 'kanto' + "/300/3")
  //     .then((response) => setPokemon(pokemons.concat(response.data.pokemon)))
  //     .catch((err) => {
  //       console.error("ops! ocorreu um erro" + err);
  //     });
  //     console.log(pokemons)
  // }, []);
  // useEffect(() => {
  //   api
  //     .get("/pokemon/regiao/" + 'kanto' + "/300/4")
  //     .then((response) => setPokemon(pokemons.concat(response.data.pokemon)))
  //     .catch((err) => {
  //       console.error("ops! ocorreu um erro" + err);
  //     });
  //     console.log(pokemons)
  // }, []);



  const fetchQuotes = (variavel) => {
 
    try {
      
      const res =
        api
          .get("/pokemon/regiao/" + variavel + "/20/1")
          .then((response) => setPokemon(response.data.pokemon))

          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
      // Set the response to the state.
      console.log(pokemons)
      
    } catch (err) {
      console.log(err);
    }
    console.log(variavel)
  };

  const paginacao = 1
  const paginacaoPokemon = 1

  const anterior = () => {
    try {
      console.log(regioes[0].nome)
      const res =
        api
          .get("/pokemon/regiao/" + regioes[0].nome + "/20/1")
          .then((response) => setPokemon(response.data.pokemon))

          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
      console.log(pokemons)
    } catch (err) {
      console.log(err);
    }
    console.log(variavel)

  }
  const proximo = () => {
    try {
      console.log(regioes[0].nome)
      const res =
        api
          .get("/pokemon/regiao/" + regioes[0].nome + "/20/1")
          .then((response) => setPokemon(response.data.pokemon))

          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
      console.log(pokemons)
    } catch (err) {
      console.log(err);
    }
    console.log(variavel)
   
  }

  return (
    <div className="">
      <div className="flex flex-col">
        <div className="flex">
          {regioes?.map((regiao) => <li key={regiao.id} className='m-auto cursor-pointer list-none hover:text-red-600' onClick={() => fetchQuotes(regiao.nome)}>{regiao.nome}</li>)}
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
      <div className="flex text-center justify-center">
        <button className='bg-indigo-500/100'  onClick={() => fetchQuotes()}>Anterior</button>
        <button className='bg-indigo-500/100'  onClick={() => fetchQuotes()}>Proximo</button>
      </div>
    </div>
  )
}