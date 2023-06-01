import React from 'react'
import { Categoria } from './Categoria'
import { CategoriasPC } from './CategoriasPC'
import { CategoriasMobile } from './CategoriasMobile'


export const Contenedor404 = () => {
  return (
    
    <div className='div404'>

    <div className='productInfo'>

        <div className='leftColumn'>

          <span className='upsPerdon'>UPS, PERDÓN!</span>
          
          <span className='msg'>Algo se ha congelado en algún lugar del océano</span>
          
          <img className='img404'/>

        </div>

    </div>

    <div className='rightColumn'>

        <span className='explorarCategorias'>¿Exploramos nuestras categorías?</span>

        

        {
          (window.innerWidth >= 768) 
          ? <CategoriasPC /> 
          : <CategoriasMobile /> 
        }

        
      </div>





</div>
  )
}
