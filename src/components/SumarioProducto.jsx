import React, { useEffect, useState } from 'react'
import { DatosProducto } from './DatosProducto'
import { OtraMetadataPC } from './OtraMetadataPc'
import { OtraMetadataMobile } from './OtraMetadatMobile'

export const SumarioProducto = ({nombreProducto, propiedadesProducto}) => {

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
            (anchuraVentana > 768)
                    ? <OtraMetadataPC/>
                    : <OtraMetadataMobile/>

        }


    </div>
  )
}





