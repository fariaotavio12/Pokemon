import React from 'react'
import { NavLink } from "react-router-dom";
export default function navBar(){

  return (
    <div className="flex list-none justify-center px-1 bg-teal-400 h-10 text-black">
      <li className='m-auto hover:text-red-600 cursor-pointer'><a href='/'>Home</a></li>
      <li className='m-auto hover:text-red-600 cursor-pointer'><a href='/Geracoes'>Geraçoes</a></li>
      <li className='m-auto hover:text-red-600 cursor-pointer'><a href='/Regioes'>Regiões</a></li>
      <li className='m-auto hover:text-red-600 cursor-pointer'><a href='/Tipos'>Tipos</a></li>
    </div>
  )
}