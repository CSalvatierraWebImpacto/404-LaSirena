import React, { useEffect, useState } from 'react'
import { SumariosPC } from './SumariosPC';
import { SumariosMobile } from './SumariosMobile';

export const Recomendaciones = () => {

    const arrayPropiedadesProducto = [
    
        {
            nombre:'Sin Gluten',
            color: '#B35B89'
        },

        {
            nombre:'BIO',
            color:'#97B231'
        }
    ];


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
    <>

        <div className='recomendaciones'>

            

            {
                (anchuraVentana > 1060) 
                    ? <SumariosPC propiedadesProducto={arrayPropiedadesProducto}/> 
                    : <SumariosMobile propiedadesProducto={arrayPropiedadesProducto}/> 
           }



        </div>
    
    </>
  )
}
