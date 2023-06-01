import React from 'react'
import { DatosProducto } from './DatosProducto'
import { OtraMetadataPC } from './OtraMetadataPc'
import { OtraMetadataMobile } from './OtraMetadatMobile'

export const SumarioProducto = ({nombreProducto, propiedadesProducto}) => {

    

  return (
    <div className="sumarioProducto">
    
        <img className='imagenRecomendados' src='./assets/image14.png'/>

        <div className='nameBrand'>
            <span className='nameProducto'>{nombreProducto}</span>

            <div className='frame395'>

                {
                    propiedadesProducto.map((dato, id) => (

                        <DatosProducto nombre={dato.nombre} color={dato.color} key={id}/>
                    ))
                }
                    
                    
            </div>
        </div>


        {
            (window.innerWidth >=768)
                    ? <OtraMetadataPC/>
                    : <OtraMetadataMobile/>

        }


    </div>
  )
}





