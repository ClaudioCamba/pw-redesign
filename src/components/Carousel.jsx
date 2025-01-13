// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';

// Import Swiper styles
import 'swiper/css';

export default () => {
  return (
    <section className='pfw-carousel'>
        <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        >
        <SwiperSlide className='pfw-carousel-slide'>
            <img src={banner1} alt="" />
        </SwiperSlide>
        <SwiperSlide className='pfw-carousel-slide'>
            <img src={banner2} alt="" />
        </SwiperSlide>
        ...
        </Swiper>
    </section>
  );
};

/*
TODO:
- add alt text to images
- add copy to slides
*/ 