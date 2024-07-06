import React from 'react'
import "./testimonials.css"
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

import {Swiper,SwiperSlide} from 'swiper/react';
import { Pagination,Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
const data=[
  {
    avatar:AVTR1,
    name:'Selena Gomez',
    review:' Lorem ipsum dolor sit amet consectetur adipisicing elit. In qui repellat, nisi ducimus voluptas voluptatem, porro minima delectus magnam maiores iste cumque'
  },
  {
    avatar:AVTR2,
    name:'Tailor Swift',
    review:' Lorem ipsum dolor sit amet consectetur adipisicing elit. In qui repellat, nisi ducimus voluptas voluptatem, porro minima delectus magnam maiores iste cumque'
  },
  {
    avatar:AVTR3,
    name:'Shatta Wale',
    review:' Lorem ipsum dolor sit amet consectetur adipisicing elit. In qui repellat, nisi ducimus voluptas voluptatem, porro minima delectus magnam maiores iste cumque'
  },
  {
    avatar:AVTR4,
    name:'Tina Show',
    review:' Lorem ipsum dolor sit amet consectetur adipisicing elit. In qui repellat, nisi ducimus voluptas voluptatem, porro minima delectus magnam maiores iste cumque'
  },

]
const Testimonials = () => {
  return (
    <section id="testimonials">
       <h5>Review from clients</h5>
       <h2>Testimonials</h2>
       <Swiper className="container testimonials__container"
         modules={[Navigation,Pagination]}
         spaceBetween={40}
         slidesPerView={1}
         pagination={{clickable:true}} >
         {
          data.map(({avatar,name,review},index)=>
          {
            return(
              <SwiperSlide key={index} className='testimonial'>
              <div className="client__avatar">
                <img src={avatar} alt='Avatar'/>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>
                {review}
                </small>
              </SwiperSlide>
            )
          })
         }
       </Swiper>
    </section>
  )
}

export default Testimonials
