import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';


const Review = () => {
    return (
        <div className='text-center mt-20'>
                  <div className="flex flex-col gap-2">
            <h6 className="text-lg text-[#FF3811] font-bold">Testimonial</h6>
            <h1 className="text-5xl font-bold">What Customer Says</h1>
            <p className="text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable.</p>
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
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                    }
                }
                cssMode={true}
                navigation={false}
                slidesPerView={2}
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

            {/* -------------------- slider -1 -------------------- */}
            <SwiperSlide>
            <div className="card">
  <div className="card-body">
  <div className=" flex gap-2">
            <img className='w-14 h-14 rounded-full' src="/public/images/man-1.jpg" alt="" />
            <div className="flex gap-2 items-center">
              <div className="flex flex-col text-start gap-1 text-black">
              <p className="text-2xl font-bold">Sajadur Rahman</p>
               <h2 className="">Web Developer</h2>
              </div>
            </div>
            <img className='w-14 ml-24 hidden lg:block' src="/public/images/icons/quote.svg" alt="" />
        </div>
        <p className="text-start ">
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
        </p>
        <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
</div>
  </div>
</div>
            </SwiperSlide>
            {/* -------------------- slider -1 -------------------- */}
            <SwiperSlide>
            <div className="card">
  <div className="card-body">
  <div className=" flex gap-2">
            <img className='w-14 h-14 rounded-full' src="/public/images/man-1.jpg" alt="" />
            <div className="flex gap-2 items-center">
              <div className="flex flex-col text-start gap-1 text-black">
              <p className="text-2xl font-bold">Sajadur Rahman</p>
               <h2 className="">Web Developer</h2>
              </div>
            </div>
            <img className='w-14 ml-24 hidden lg:block' src="/public/images/icons/quote.svg" alt="" />
        </div>
        <p className="text-start ">
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
        </p>
        <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
</div>
  </div>
</div>
            </SwiperSlide>
            {/* -------------------- slider -1 -------------------- */}
            <SwiperSlide>
            <div className="card">
  <div className="card-body">
  <div className=" flex gap-2">
            <img className='w-14 h-14 rounded-full' src="/public/images/man-1.jpg" alt="" />
            <div className="flex gap-2 items-center">
              <div className="flex flex-col text-start gap-1 text-black">
              <p className="text-2xl font-bold">Sajadur Rahman</p>
               <h2 className="">Web Developer</h2>
              </div>
            </div>
            <img className='w-14 ml-24 hidden lg:block' src="/public/images/icons/quote.svg" alt="" />
        </div>
        <p className="text-start ">
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
        </p>
        <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
</div>
  </div>
</div>
            </SwiperSlide>





        </Swiper>
            </div>
            
        </div>
    );
};

export default Review;