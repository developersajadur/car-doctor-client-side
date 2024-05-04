import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import '../../style.css';
const Slider = () => {
    return (
        <div className='h-96'>
        <Swiper
                cssMode={true}
                navigation={true}
                slidesPerView={1}
                spaceBetween={30}
                centeredSlides={true}
                pagination={false}
                loop={true}
                mousewheel={true}
                autoplay={{ delay: 5500, disableOnInteraction: false }}
                keyboard={true}
                modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper h-60 lg:h-96 sm:mt-5"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
    );
};

export default Slider;