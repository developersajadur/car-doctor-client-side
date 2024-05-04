import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const Team = () => {
    return (
        <div className="text-center mt-10">
                        <div className="flex flex-col gap-2">
            <h6 className="text-lg text-[#FF3811] font-bold">Team</h6>
            <h1 className="text-5xl font-bold">Meet Our Team</h1>
            <p className="text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable.  </p>
            </div>

            <div className='h-fit'>
        <Swiper
                breakpoints={
                    {
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }
                }
                cssMode={true}
                navigation={false}
                slidesPerView={3}
                spaceBetween={30}
                centeredSlides={true}
                pagination={false}
                loop={true}
                mousewheel={true}
                autoplay={{ delay: 5500, disableOnInteraction: false }}
                keyboard={true}
                modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper h-fit sm:mt-5"
        >
            {/* -------- slider 1 -------------------- */}
          <SwiperSlide>
          <div className="card w-96 border">
  <figure className="px-10 pt-10">
    <img src="/public/images/team/1.jpg" alt="team" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-bold">Car Engine Plug</h2>
    <p>Engine Expert</p>
    <div className="card-actions">
     <a href="facebook.com" className="">
        <img src="/public/images/team/facebook.png" alt="" />
     </a>
     <a href="facebook.com" className="">
        <img src="/public/images/team/twitter.png" alt="" />
     </a>
     <a href="facebook.com" className="">
        <img src="/public/images/team/instagram.png" alt="" />
     </a>
     <a href="facebook.com" className="">
        <img src="/public/images/team/linkedin.png" alt="" />
     </a>
    </div>
  </div>
</div>
          </SwiperSlide>
            {/* -------- slider 1 -------------------- */}
          <SwiperSlide>
          <div className="card w-96 border">
  <figure className="px-10 pt-10">
    <img src="/public/images/team/2.jpg" alt="team" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-bold">Car Engine Plug</h2>
    <p>Engine Expert</p>
    <div className="card-actions">
     <a href="facebook.com" className="">
        <img src="/public/images/team/facebook.png" alt="" />
     </a>
     <a href="facebook.com" className="">
        <img src="/public/images/team/twitter.png" alt="" />
     </a>
     <a href="facebook.com" className="">
        <img src="/public/images/team/instagram.png" alt="" />
     </a>
     <a href="facebook.com" className="">
        <img src="/public/images/team/linkedin.png" alt="" />
     </a>
    </div>
  </div>
</div>
          </SwiperSlide>
            {/* -------- slider 1 -------------------- */}
          <SwiperSlide>
          <div className="card w-96 border">
  <figure className="px-10 pt-10">
    <img src="/public/images/team/3.jpg" alt="team" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title font-bold">Car Engine Plug</h2>
    <p>Engine Expert</p>
    <div className="card-actions">
     <a href="facebook.com" className="">
        <img src="/public/images/team/facebook.png" alt="" />
     </a>
     <a href="facebook.com" className="">
        <img src="/public/images/team/twitter.png" alt="" />
     </a>
     <a href="facebook.com" className="">
        <img src="/public/images/team/instagram.png" alt="" />
     </a>
     <a href="facebook.com" className="">
        <img src="/public/images/team/linkedin.png" alt="" />
     </a>
    </div>
  </div>
</div>
          </SwiperSlide>
        </Swiper>
      </div>
            
        </div>
    );
};

export default Team;