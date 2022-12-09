import React, { useEffect, useState, useCallback } from "react";
import api from "../servicos/api";

export default function Home() {
  const [regioes, setUser] = useState([]);
  const [pokemons, setPokemon] = useState([]);
  const [variavelProximo, setProximo] = useState(2);
  const [variavelRegiao, setRegiao] = useState(0);

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
  const fetchQuotes = (variavel , rotaRegiao) => {

    setProximo(2)
    console.log(rotaRegiao)
    setRegiao(rotaRegiao -1)
    console.log(variavelRegiao)

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



  const anterior = (paginacao, paginacaoRegiao) => {
    if (paginacao > 1) {
      paginacao = paginacao -1


      setProximo(variavelProximo - 1)
      // paginacao = paginacao - 1
      console.log(paginacao,'paginacao')
      try {

        console.log(variavelProximo)
        const res =
          api
            .get("/pokemon/regiao/" + regioes[variavelRegiao].nome + "/20/" + variavelProximo)
            .then((response) => setPokemon(response.data.pokemon))

            .catch((err) => {
              console.error("ops! ocorreu um erro" + err);
            });
      
        console.log('test')
        console.log(pokemons)

      } catch (err) {
        console.log(err);
      }
    }
    if (paginacao <= 1) {
      if (paginacaoRegiao > 1){
        setRegiao(variavelRegiao - 1);
        setProximo(1)
      }
    }
  }

  const proximo = (paginacao, paginacaoRegiao) => {
    setProximo(variavelProximo + 1)
    console.log(variavelProximo)
    console.log(paginacao)


    try {
      const res =
        api
          .get("/pokemon/regiao/" + regioes[variavelRegiao].nome + "/20/" + variavelProximo)
          // console.log('oi' + variavelProximo)
          .then((response) => setPokemon(response.data.pokemon))

          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
      if (pokemons == null || pokemons == undefined) {
        setProximo(1)
        setRegiao(variavelRegiao + 1)
      }

    } catch (err) {
      console.log(err);
    }


  }

  return (
    <div className="">
      <div className="flex flex-col">
        <div className="flex">
          {regioes?.map((regiao) => <li key={regiao.id} className='m-auto cursor-pointer list-none hover:text-red-600' onClick={() => fetchQuotes(regiao.nome , regiao.id)}>{regiao.nome} {regiao.id}</li>)}
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
        <button className='bg-indigo-500/100' onClick={() => anterior(variavelProximo, variavelRegiao)}>Anterior</button>
        <button className='bg-indigo-500/100' onClick={() => proximo(variavelProximo, variavelRegiao)}>Proximo</button>
      </div>
    </div>
  )
}