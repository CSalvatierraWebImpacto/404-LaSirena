import React from 'react'
import { SumarioProducto } from './sumarioProducto'

export const Recomendaciones = () => {

    let arrayPropiedadesProducto = [
    
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

            <span className='msgRecomendaciones'> También te pueden interesar nuestros top ventas</span>

            <div className='productos'>

                <SumarioProducto nombreProducto={'Lomo Merluza'} propiedadesProducto={arrayPropiedadesProducto}/>
                <SumarioProducto nombreProducto={'Lomo Merluza'} propiedadesProducto={arrayPropiedadesProducto}/>
                <SumarioProducto nombreProducto={'Lomo Merluza'} propiedadesProducto={arrayPropiedadesProducto}/>
                <SumarioProducto nombreProducto={'Lomo Merluza'} propiedadesProducto={arrayPropiedadesProducto}/>
                <SumarioProducto nombreProducto={'Lomo Merluza'} propiedadesProducto={arrayPropiedadesProducto}/>
                <SumarioProducto nombreProducto={'Lomo Merluza'} propiedadesProducto={arrayPropiedadesProducto}/>
            
                


            </div>



        </div>
    
    </>
  )
}
