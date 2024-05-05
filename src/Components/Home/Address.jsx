import { FaLocationDot } from "react-icons/fa6";
import { FcCalendar } from "react-icons/fc";
import { MdPermPhoneMsg } from "react-icons/md";

const Address = () => {
    return (
        <div className="bg-black py-10 px-5 flex flex-col rounded-2xl lg:flex-row gap-10 lg:gap-24 mt-20">
       {/* ---------------- service -1 ---------------------- */}
       <div className=" flex gap-2">
            <FcCalendar className="text-7xl" />
            <div className="flex gap-2 items-center">
              <div className="flex flex-col gap-1 text-white">
              <p className="">We are open monday-friday</p>
               <h2 className="text-3xl font-bold">7:00 am - 9:00 pm</h2>
              </div>
            </div>
        </div>
       {/* ---------------- service -1 ---------------------- */}
       <div className=" flex gap-2">
            <MdPermPhoneMsg className="text-7xl text-red-600" />
            <div className="flex gap-2 items-center">
              <div className="flex flex-col gap-1 text-white">
              <p className="">Have a question?</p>
               <h2 className="text-3xl font-bold">01787448412</h2>
              </div>
            </div>
        </div>
       {/* ---------------- service -1 ---------------------- */}
        <div className=" flex gap-2">
            <FaLocationDot className="text-7xl text-red-600" />
            <div className="flex gap-2 items-center">
              <div className="flex flex-col gap-1 text-white">
              <p className="">Need a repair? our address</p>
               <h2 className="text-3xl font-bold">Chirirbandar, Dinajpur</h2>
              </div>
            </div>
        </div>
        </div>
    );
};

export default Address;