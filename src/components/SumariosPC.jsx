import React from 'react'
import { SumarioProducto } from './sumarioProducto'


export const SumariosPC = ({propiedadesProducto}) => {

  
  return (
    <>

            <span className='msgRecomendaciones'> También te pueden interesar nuestros top ventas</span>

            <div className='productos'>

                <SumarioProducto nombreProducto={'Lomo Merluza'} propiedadesProducto={propiedadesProducto}/>
                <SumarioProducto nombreProducto={'Lomo Merluza'} propiedadesProducto={propiedadesProducto}/>
                <SumarioProducto nombreProducto={'Lomo Merluza'} propiedadesProducto={propiedadesProducto}/>
                <SumarioProducto nombreProducto={'Lomo Merluza'} propiedadesProducto={propiedadesProducto}/>
                <SumarioProducto nombreProducto={'Lomo Merluza'} propiedadesProducto={propiedadesProducto}/>
                <SumarioProducto nombreProducto={'Lomo Merluza'} propiedadesProducto={propiedadesProducto}/>
            
                
            </div>

    </>        
  )
}
