import { useEffect, useState } from "react";
import Service from "../Services/Service";
import { NavLink } from "react-router-dom";

const ServicesHome = () => {
    const [services , setServices] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    

    return (
        <div className="mt-40 text-center">
               <div className="flex flex-col gap-2">
            <h6 className="text-lg text-[#FF3811] font-bold">Service</h6>
            <h1 className="text-5xl font-bold">Our Service Area</h1>
            <p className="text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
                {
                    services.map( service => <Service
                    key={service._id}
                    service={service}
                    ></Service>)
                }
            </div>

            <NavLink to="/services" className="btn w-fit text-[#FF3811] border-[#FF3811] bg-transparent mt-10">More Services</NavLink>
        </div>
    );
};

export default ServicesHome;
