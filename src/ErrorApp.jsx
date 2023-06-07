import React from 'react';
import { Categoria } from './components/Categoria';
import { Contenedor404 } from './components/Contenedor404';
import { Recomendaciones } from './components/Recomendaciones';


export const ErrorApp = () => {
  return (
    <>
        <div className='desktop'>

          <div className='header'/>

          <div className='breadcum'/>

          
        
            <Contenedor404 />


            <Recomendaciones />


          <div className='footer'/>  

          </div>


        
    </>
  )
}

