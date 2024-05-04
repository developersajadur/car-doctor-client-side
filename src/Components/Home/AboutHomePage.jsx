import { Link } from "react-router-dom";

const AboutHomePage = () => {
    return (
        <div>
            <div className="flex flex-col-reverse lg:flex-row gap-5 lg:gap-20">
                <div className=" w-full lg:w-1/2">
            <img className="rounded-xl" src="/public/images/about_us/person.jpg" alt="person" />
            <img className=" lg:absolute lg:-translate-y-56 lg:translate-x-80 hidden lg:block w-full lg:w-80 mt-10 border-[8px] rounded-xl border-white" src="/public/images/about_us/parts.jpg" alt="" />
                </div>
                <div className="w-full lg:w-1/2 flex flex-col gap-2 lg:gap-4">
                    <h6 className="text-[#FF3811] text-lg font-bold">About Us</h6>
                    <h1 className="text-2xl lg:text-4xl font-bold w-72">We are qualified & of experience in this field</h1>
                    <p className="">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <Link className="btn bg-[#FF3811] text-white w-fit" to="/about">Get More Info</Link>
                </div>
            </div>
        </div>
    );
};

export default AboutHomePage;