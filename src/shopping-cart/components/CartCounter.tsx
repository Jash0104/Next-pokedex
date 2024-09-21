"use client";

import { useState } from "react"

interface Props {
  value?: number
}

export const CartCounter = ({ value = 0 }: Props) => {

  const [count, setCount] = useState( value )

  const incrementar = (num: number) => {
    setCount( count + num)
  }

  return (
    <>
      <span className="text-9xl">{ count } </span>
      <div className="flex">
        <button 
          onClick={ () => incrementar(-1) }
          className="flex justify-center items-center p-2 rounded-xl bg-slate-900 text-white transition-all w-[100px] hover:bg-gray-600 mr-2"> -1 </button>
        <button 
          onClick={ () => incrementar(1) }
          className="flex justify-center items-center p-2 rounded-xl bg-slate-900 text-white transition-all w-[100px] hover:bg-gray-600 mr-2"> +1 </button>
      </div>
    </>
  )
}
