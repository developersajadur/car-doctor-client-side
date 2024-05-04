import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";


const Service = ({service}) => {
    return (
        <Link to={`/services/${service._id}`}>
            <div className="card w-96 border h-96">
  <figure className="px-10 pt-10">
    <img src={service.img} alt="Shoes" className="rounded-xl h-52" />
  </figure>
  <div className="card-body items-start text-center">
    <h2 className="card-title text-2xl font-bold">{service.title}</h2>
    <div className="flex justify-between w-full text-start items-center">
    <p className="text-lg font-bold text-[#FF3811]">Price : ${service.price}</p>
    <FaArrowRight className="text-[#FF3811]" />
    </div>
  </div>
</div>
        </Link>
    );
};

export default Service;