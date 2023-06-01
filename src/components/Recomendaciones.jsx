import React from 'react'
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

    
  return (
    <>

        <div className='recomendaciones'>

            

            {
                (window.innerWidth >= 768) 
                    ? <SumariosPC propiedadesProducto={arrayPropiedadesProducto}/> 
                    : <SumariosMobile propiedadesProducto={arrayPropiedadesProducto}/> 
           }



        </div>
    
    </>
  )
}
