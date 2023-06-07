import React, { useEffect, useState } from 'react'
import { CategoriasPC } from './CategoriasPC'
import { CategoriasMobile } from './CategoriasMobile'


export const Contenedor404 = () => {

  const [anchuraVentana, setAnchuraVentana] = useState(window.innerWidth);

  useEffect(() => {
    // Función para actualizar la anchura de la ventana
    const actualizarAnchuraVentana = () => {
      setAnchuraVentana(window.innerWidth);
    };

    // Agregar un listener al evento 'resize' en la ventana
    window.addEventListener("resize", actualizarAnchuraVentana);

    // Eliminar el listener al desmontar el componente
    return () => {
      window.removeEventListener("resize", actualizarAnchuraVentana);
    };
  }, []);
  


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
          
         (anchuraVentana > 768) 
                ? <CategoriasPC /> 
                : <CategoriasMobile /> 
        }

        
      </div>





</div>
  )
}
