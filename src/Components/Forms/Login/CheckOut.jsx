import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import {  useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const CheckOut = () => {
    const {user} = useContext(AuthContext)
    const email = user?.email;
    const service = useLoaderData()
    const {title , img , price} = service;
    const { register: checkOut, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {  
       const dataToSent = {...data, title, img, price , email}
       fetch("http://localhost:5000/bookings",
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dataToSent),
        })
       .then(res => res.json())
       .then(data => {
        if (data.insertedId) {
            toast.success('Spot Add successfully');
        }
    })
    .catch(error => {
        console.error('Error sending data to server:', error);
    });
    };

    return (
        <div className="mb-20">
                        <div className="carousel-item relative my-10 lg:h-72 rounded-lg w-full flex flex-col justify-center items-center">
    <img
      src="/public/images/checkout/checkout.png"
      className="w-full rounded-lg lg:h-72"
    />
    <div className="absolute flex flex-col rounded-lg h-full items-center justify-center left-0 top-0 gap-8 bg-gradient-to-r pl-16 lg:pl-28 from-[#151515] to-[rgba(21, 21, 21, 0)]">
      <h1 className="text-3xl lg:text-6xl text-white font-bold">Check Out</h1>
      </div>
    </div>
               <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 rounded-2xl mt-10 bg-[#F3F3F3] p-10">
                <h1 className="text-2xl mb-5 lg:text-4xl font-bold text-center">You Are Going To Pay ${price}</h1>
                <div className="flex flex-col lg:flex-row gap-5">
                <input {...checkOut("name", { required: true })} name="name" type="text" placeholder="Your Name" className="input  w-full" />
                    {errors.name && <span className="text-sm text-red-500 font-medium -mt-4">Please Enter Your Name</span>}
                    <input {...checkOut("date", { required: true })} name="date" type="date" placeholder="Your Last Name" className="input  w-full" />
                    {errors.email && <span className="text-sm text-red-500 font-medium -mt-4">Please Enter Your Last Name</span>}
                </div>

                <div className="flex flex-col lg:flex-row gap-5">
                <input {...checkOut("phone", { required: true })} name="phone" type="number" placeholder="Your Phone" className="input  w-full" />
                    {errors.name && <span className="text-sm text-red-500 font-medium -mt-4">Please Enter Your Phone Number</span>}
                    <input {...checkOut("email2", { required: true })} defaultValue={email} name="email2" type="email" placeholder="Your Email" className="input w-full" />
                    {errors.email && <span className="text-sm text-red-500 font-medium -mt-4">Please Enter Your Email</span>}
                </div>
                <textarea {...checkOut("massage", { required: true })} name="massage" className="textarea h-64" placeholder="Enter Your Message"></textarea>
                <button className="btn text-white text-lg font-semibold w-full h-fit py-4  bg-[#FF3811]">Order Confirm</button>
                </form>
        </div>
    );
};

export default CheckOut;