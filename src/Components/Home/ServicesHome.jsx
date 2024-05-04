import { useEffect, useState } from "react";
import Service from "../Services/Service";

const ServicesHome = () => {
    const [services , setServices] = useState([]);
    
    useEffect(() => {
        fetch("/public/JsonData/services.json")
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    
    console.log(services);

    return (
        <div className="mt-40 text-center">
               <div className="flex flex-col gap-2">
            <h6 className="text-lg text-[#FF3811] font-bold">Service</h6>
            <h1 className="text-5xl font-bold">Our Service Area</h1>
            <p className="text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>

            <div className="grid grid-cols-3 gap-10 mt-10">
                {
                    services.map( service => <Service
                    key={service._id}
                    service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default ServicesHome;
