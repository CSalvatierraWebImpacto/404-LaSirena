import React from 'react'
import { SumarioProducto } from './sumarioProducto'


export const SumariosMobile = ({propiedadesProducto}) => {

  return (
    <>

    <span className='msgRecomendaciones'> También te pueden interesar</span>

    <div className='productos'>

        <SumarioProducto nombreProducto={'Lomo Merluza'} propiedadesProducto={propiedadesProducto}/>
        <SumarioProducto nombreProducto={'Lomo Merluza'} propiedadesProducto={propiedadesProducto}/>
        <SumarioProducto nombreProducto={'Lomo Merluza'} propiedadesProducto={propiedadesProducto}/>
        
    
        
    </div>

</>   
  )
}
