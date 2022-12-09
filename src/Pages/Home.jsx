import React from 'react'

const pokemon = new URL("../../public/backgroundhome.png",import.meta.url)
export default function Home(){

  return (
    <div className="h-full justify-center" 
    ><img className='h-5/6 m-auto ' src={pokemon}/></div>
  )
}