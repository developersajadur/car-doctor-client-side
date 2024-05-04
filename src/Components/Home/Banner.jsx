import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Autoplay,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="mt-10 mb-20">
      <div className="">
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
          className="mySwiper  sm:mt-5"
        >
            {/* ------------------ banner 1 ------------------- */}
            <SwiperSlide className="carousel w-full">
  <div className="carousel-item relative  w-full flex flex-col justify-center items-center">
    <img
      src="/public/images/banner/1.jpg"
      className="w-full rounded-lg"
    />
    <div className="absolute flex flex-col h-full items-center justify-center left-0 top-0 gap-8 bg-gradient-to-r lg:pl-28 from-[#151515] to-[rgba(21, 21, 21, 0)]">
      <h1 className="text-3xl lg:text-6xl w-96 text-white font-bold">Affordable Price For Car Servicing</h1>
      <p className="text-white">There are many variations of passages of available, but the majority <br /> have suffered alteration in some form</p>
      <div className="flex gap-8 ">
          <Link className="btn text-white w-fit bg-[#FF3811] border-none" to="">Discover More</Link>
          <Link className="btn text-white w-fit border bg-transparent" to="">Latest Project</Link>
      </div>
    </div>
  </div>
</SwiperSlide>
            {/* ------------------ banner 2 ------------------- */}
            <SwiperSlide className="carousel w-full">
  <div className="carousel-item relative  w-full flex flex-col justify-center items-center">
    <img
      src="/public/images/banner/2.jpg"
      className="w-full rounded-lg"
    />
    <div className="absolute flex flex-col h-full items-center justify-center left-0 top-0 gap-8 bg-gradient-to-r lg:pl-28 from-[#151515] to-[rgba(21, 21, 21, 0)]">
      <h1 className="text-3xl lg:text-6xl w-96 text-white font-bold">Affordable Price For Car Servicing</h1>
      <p className="text-white">There are many variations of passages of available, but the majority <br /> have suffered alteration in some form</p>
      <div className="flex gap-8 ">
          <Link className="btn text-white w-fit bg-[#FF3811] border-none" to="">Discover More</Link>
          <Link className="btn text-white w-fit border bg-transparent" to="">Latest Project</Link>
      </div>
    </div>
  </div>
</SwiperSlide>
            {/* ------------------ banner 3 ------------------- */}
            <SwiperSlide className="carousel w-full">
  <div className="carousel-item relative  w-full flex flex-col justify-center items-center">
    <img
      src="/public/images/banner/3.jpg"
      className="w-full rounded-lg"
    />
    <div className="absolute flex flex-col h-full items-center justify-center left-0 top-0 gap-8 bg-gradient-to-r lg:pl-28 from-[#151515] to-[rgba(21, 21, 21, 0)]">
      <h1 className="text-3xl lg:text-6xl w-96 text-white font-bold">Affordable Price For Car Servicing</h1>
      <p className="text-white">There are many variations of passages of available, but the majority <br /> have suffered alteration in some form</p>
      <div className="flex gap-8 ">
          <Link className="btn text-white w-fit bg-[#FF3811] border-none" to="">Discover More</Link>
          <Link className="btn text-white w-fit border bg-transparent" to="">Latest Project</Link>
      </div>
    </div>
  </div>
</SwiperSlide>

            {/* ------------------ banner 4 ------------------- */}
            <SwiperSlide className="carousel w-full">
  <div className="carousel-item relative  w-full flex flex-col justify-center items-center">
    <img
      src="/public/images/banner/5.jpg"
      className="w-full rounded-lg"
    />
    <div className="absolute flex flex-col h-full items-center justify-center left-0 top-0 gap-8 bg-gradient-to-r lg:pl-28 from-[#151515] to-[rgba(21, 21, 21, 0)]">
      <h1 className="text-3xl lg:text-6xl w-96 text-white font-bold">Affordable Price For Car Servicing</h1>
      <p className="text-white">There are many variations of passages of available, but the majority <br /> have suffered alteration in some form</p>
      <div className="flex gap-8 ">
          <Link className="btn text-white w-fit bg-[#FF3811] border-none" to="">Discover More</Link>
          <Link className="btn text-white w-fit border bg-transparent" to="">Latest Project</Link>
      </div>
    </div>
  </div>
</SwiperSlide>
            {/* ------------------ banner 5 ------------------- */}
            <SwiperSlide className="carousel w-full">
  <div className="carousel-item relative  w-full flex flex-col justify-center items-center">
    <img
      src="/public/images/banner/6.jpg"
      className="w-full rounded-lg"
    />
    <div className="absolute flex flex-col h-full items-center justify-center left-0 top-0 gap-8 bg-gradient-to-r lg:pl-28 from-[#151515] to-[rgba(21, 21, 21, 0)]">
      <h1 className="text-3xl lg:text-6xl w-96 text-white font-bold">Affordable Price For Car Servicing</h1>
      <p className="text-white">There are many variations of passages of available, but the majority <br /> have suffered alteration in some form</p>
      <div className="flex gap-8 ">
          <Link className="btn text-white w-fit bg-[#FF3811] border-none" to="">Discover More</Link>
          <Link className="btn text-white w-fit border bg-transparent" to="">Latest Project</Link>
      </div>
    </div>
  </div>
</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
