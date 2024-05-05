// import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { LuFileBarChart2 } from "react-icons/lu";
import {  Link, useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
    const service = useLoaderData()
    // const [facilities , setFacilities] = useState([])
    const facilities = service?.facility;

    return (
        <div className="mb-20">
            <div className="carousel-item relative my-10 lg:h-72 rounded-lg w-full flex flex-col justify-center items-center">
    <img
      src="/public/images/checkout/checkout.png"
      className="w-full rounded-lg lg:h-72"
    />
    <div className="absolute flex flex-col rounded-lg h-full items-center justify-center left-0 top-0 gap-8 bg-gradient-to-r lg:pl-28 from-[#151515] to-[rgba(21, 21, 21, 0)]">
      <h1 className="text-3xl lg:text-6xl text-white font-bold">Service Details</h1>
      </div>
    </div>
{/* -------------------------------- details ------------------------ */}
<div className="flex gap-10 w-full">
    {/* -------------------------Left side ---------------------- */}
    <div className="lg:w-[60%] flex flex-col gap-5">
        <img src={service?.img} alt="" className="rounded-lg w-full" />
        <h1 className="text-2xl lg:text-5xl font-bold">{service?.title}</h1>
        <p className="text-[#737373] text-lg">{service?.description}</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
           {
            facilities?.map(facility => 
                <div key={facility?.name} className="bg-[#F3F3F3] border-[#ff3811] p-8 flex flex-col rounded-lg text-start border-t-2">
                <h5 className="text-xl font-bold">{facility?.name}</h5>
                <p className="text-[#737373] text-lg">{facility?.details}</p>
                </div>
            )
           }
        </div>
        <p className="text-[#737373] text-lg">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>

        <h1 className="text-2xl lg:text-5xl font-bold">3 Simple Steps to Process</h1>

        <p className="text-[#737373] text-lg">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>

        <div className="flex flex-col lg:flex-row gap-5 text-center">
            <div className="flex flex-col gap-3 justify-center items-center p-5 rounded-lg border-[#ff3811] border-t-2">
            <div className="text-white bg-[#FF3811] text-xl font-bold h-14 w-14 flex justify-center items-center rounded-full">01</div>
            <h5 className="text-3xl font-bold">Step One</h5>
            <p className="text-[#737373] text-lg">It uses a dictionary of over 200 .</p>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center p-5 rounded-lg border-[#ff3811] border-t-2">
            <div className="text-white bg-[#FF3811] text-xl font-bold h-14 w-14 flex justify-center items-center rounded-full">02</div>
            <h5 className="text-3xl font-bold">Step Two</h5>
            <p className="text-[#737373] text-lg">It uses a dictionary of over 200 .</p>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center p-5 rounded-lg border-[#ff3811] border-t-2">
            <div className="text-white bg-[#FF3811] text-xl font-bold h-14 w-14 flex justify-center items-center rounded-full">03</div>
            <h5 className="text-3xl font-bold">Step Three</h5>
            <p className="text-[#737373] text-lg">It uses a dictionary of over 200 .</p>
            </div>
        </div>
        <div className="aspect-w-full h-96">
        <iframe
        className="w-full h-full rounded-2xl"
        src="https://www.youtube.com/embed/ZQvfHyfgBtA?si=nR6p_D74Te3mowrt"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
</div>
    </div>




    {/* -------------------------Left side ---------------------- */}
    <div className="lg:w-[40%] flex flex-col gap-4">
            <div className="bg-[#F3F3F3] p-10 flex flex-col rounded-lg gap-5">
                <h2 className="text-4xl font-bold">Services</h2>
                <Link to="" className="flex justify-between items-center p-6 rounded-lg text-black hover:text-white bg-white hover:bg-[#FF3811]">
                    <h5 className="text-xl font-bold">Full Car Repair</h5>
                <FaArrowRight className=" text-2xl" />
                </Link>
                <Link to="" className="flex justify-between items-center p-6 rounded-lg text-black hover:text-white bg-white hover:bg-[#FF3811]">
                    <h5 className="text-xl font-bold">Engine Repair</h5>
                <FaArrowRight className=" text-2xl" />
                </Link>
                <Link to="" className="flex justify-between items-center p-6 rounded-lg text-black hover:text-white bg-white hover:bg-[#FF3811]">
                    <h5 className="text-xl font-bold">Automatic Services</h5>
                <FaArrowRight className=" text-2xl" />
                </Link>
                <Link to="" className="flex justify-between items-center p-6 rounded-lg text-black hover:text-white bg-white hover:bg-[#FF3811]">
                    <h5 className="text-xl font-bold">Engine Oil Change</h5>
                <FaArrowRight className=" text-2xl" />
                </Link>
                <Link to="" className="flex justify-between items-center p-6 rounded-lg text-black hover:text-white bg-white hover:bg-[#FF3811]">
                    <h5 className="text-xl font-bold">Battery Charge</h5>
                <FaArrowRight className=" text-2xl" />
                </Link>
            </div>
                {/* ----------------------------------------------------------- */}
            <div className="bg-black rounded-lg flex flex-col gap-8 text-white p-10">
           <h1 className="text-2xl font-bold">Download</h1>
           <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
            <LuFileBarChart2 className="text-4xl" />
            <div className="flex flex-col">
                <h6 className="text-xl font-bold">Our Brochure</h6>
                <p className="text-[#737373] text-lg">Download</p>
            </div>
            </div>
            <Link to="" className="h-14 w-14 rounded-xl flex justify-center items-center bg-[#FF3811]"><FaArrowRight></FaArrowRight></Link>
           </div>
           {/* ---------------------------------- */}
           <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
            <LuFileBarChart2 className="text-4xl" />
            <div className="flex flex-col">
                <h6 className="text-xl font-bold">Our Brochure</h6>
                <p className="text-[#737373] text-lg">Download</p>
            </div>
            </div>
            <Link to="" className="h-14 w-14 rounded-xl flex justify-center items-center bg-[#FF3811]"><FaArrowRight></FaArrowRight></Link>
           </div>
            </div>
            {/* ---------------------------------------------- */}
            <div className="bg-black rounded-lg flex flex-col justify-center items-center gap-8 text-white p-10">
                <img  className="w-32" src="/public/images/logo.svg" alt="" />
                <h2 className="text-2xl font-bold text-center">Need Help? We Are Here <br /> To Help You</h2>
                <div className="bg-white rounded-lg p-8 text-center justify-center items-center flex flex-col gap-2">
                    <h2 className="text-3xl font-bold text-black"><span className="text-[#FF3811]">Car Doctor</span> Special</h2>
                    <h3 className="text-[#737373] text-2xl mb-8 font-bold">Save up to <span className="text-[#FF3811]"> 60% off</span></h3>
                </div>
                <Link to="" className="btn w-fit h-fit -translate-y-16 bg-[#FF3811] text-2xl font-bold text-white px-10 py-5">Get A Quote</Link>
            </div>
            {/* ------------------------------------- */}
            <h1 className="text-3xl mt-5 lg:text-5xl font-bold">Price ${service?.price}</h1>
            <Link to="" className="btn w-full mt-5 h-fit  bg-[#FF3811] text-2xl font-bold text-white px-10 py-5">Proceed Checkout</Link>
    </div>
</div>


  </div>
    );
};

export default ServiceDetails;