import React from 'react'

export const Categoria = ({texto}) => {
  return (
    <>
        <button className='botonCategorias'> <span className='textButtons'> {texto} </span> </button>
    </>
  )
}
