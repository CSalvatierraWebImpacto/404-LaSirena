import React from 'react'
import { Categoria } from './Categoria'

export const CategoriasMobile = () => {
  return (
    <>
    <div className='frame'>
        <Categoria texto={'Pescado'} />
        <Categoria texto={'Marisco'} />
        <Categoria texto={'Platos Preparados'} />
    </div>

    <div className='frame'>

        <Categoria texto={'Platos Precocinados'} />
        <Categoria texto={'Helados'} />
        <Categoria texto={'BIO'} />
        

    </div>

    <div className='frame'>

        <Categoria texto={'Verduras'} />
        <Categoria texto={'Pizzas'} />
        <Categoria texto={'100% Vegetal'} />
       

    </div>

    <div className='frame'>

        <Categoria texto={'Pastelería'} />
        <Categoria texto={'TOP Ventas'} />
        <Categoria texto={'Patatas'} />

    </div>

    <div className='frame'>

        <Categoria texto={'Carne'} />
        <Categoria texto={'Sin Gluten'} />
        <Categoria texto={'Novedades'} />

    </div>
    </>
  )
}




    
   
    
    