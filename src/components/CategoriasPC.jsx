import React from 'react'
import { Categoria } from './Categoria'

export const CategoriasPC = () => {
  return (
    <>
        <div className='frame'>

        <Categoria texto={'Pescado'} />
        <Categoria texto={'Marisco'} />
        <Categoria texto={'Platos Preparados'} />
        <Categoria texto={'Platos Precocinados'} />

        </div>

        <div className='frame'>

        <Categoria texto={'Helados'} />
        <Categoria texto={'Verduras'} />
        <Categoria texto={'Pizzas'} />
        <Categoria texto={'100% Vegetal'} />
        <Categoria texto={'BIO'} />
        <Categoria texto={'No Congelados'} />

        </div>

        <div className='frame'>

        <Categoria texto={'Pastelería'} />
        <Categoria texto={'TOP Ventas'} />
        <Categoria texto={'Patatas'} />
        <Categoria texto={'Carne'} />
        <Categoria texto={'Sin Gluten'} />
        <Categoria texto={'Novedades'} />

        </div>
    </>
  )
}
