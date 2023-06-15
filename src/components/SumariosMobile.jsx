import React from 'react'
import { SumarioProducto } from './SumarioProducto'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from "swiper";


export const SumariosMobile = ({propiedadesProducto}) => {

  return (
    <>

    <span className='msgRecomendaciones'> También te pueden interesar</span>

    <div className='productos'>

        <Swiper
          modules={[Pagination]}
          spaceBetween={150}
          slidesPerView={3}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >

              <SwiperSlide>
              <SumarioProducto nombreProducto={'Lomo Merluza'} propiedadesProducto={propiedadesProducto}/>
              </SwiperSlide>

              <SwiperSlide>
              <SumarioProducto nombreProducto={'Lomo Merluza'} propiedadesProducto={propiedadesProducto}/>
              </SwiperSlide>

              <SwiperSlide>
              <SumarioProducto nombreProducto={'Lomo Merluza'} propiedadesProducto={propiedadesProducto}/>
              </SwiperSlide>

              <SwiperSlide>
              <SumarioProducto nombreProducto={'Lomo Merluza'} propiedadesProducto={propiedadesProducto}/>
              </SwiperSlide>

              <SwiperSlide>
              <SumarioProducto nombreProducto={'Lomo Merluza'} propiedadesProducto={propiedadesProducto}/>
              </SwiperSlide>

              <SwiperSlide>
              <SumarioProducto nombreProducto={'Lomo Merluza'} propiedadesProducto={propiedadesProducto}/>
              </SwiperSlide>
          
          
        </Swiper>

    </div>



    {/*

        <SumarioProducto nombreProducto={'Lomo Merluza'} propiedadesProducto={propiedadesProducto}/>
        <SumarioProducto nombreProducto={'Lomo Merluza'} propiedadesProducto={propiedadesProducto}/>
        <SumarioProducto nombreProducto={'Lomo Merluza'} propiedadesProducto={propiedadesProducto}/>
        <SumarioProducto nombreProducto={'Lomo Merluza'} propiedadesProducto={propiedadesProducto}/>
        <SumarioProducto nombreProducto={'Lomo Merluza'} propiedadesProducto={propiedadesProducto}/>
        <SumarioProducto nombreProducto={'Lomo Merluza'} propiedadesProducto={propiedadesProducto}/> 
        */}


</>   
  )
}
