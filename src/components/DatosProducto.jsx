import React from 'react'

export const DatosProducto = ({nombre, color}) => {
  return (
    <div className='divDato'>
        <svg width="12" height="12" className='ellipse'>
            <circle cx="6" cy="6" r="6" fill={color} />
        </svg>
        
        <span className='estiloDato'>{nombre}</span>
    </div>
  )
}
