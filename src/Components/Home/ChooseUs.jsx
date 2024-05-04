

const ChooseUs = () => {
    return (
        <div className="mt-20 text-center">
            <div className="flex flex-col gap-2">
            <h6 className="text-lg text-[#FF3811] font-bold">Core Features</h6>
            <h1 className="text-5xl font-bold">Why Choose Us</h1>
            <p className="text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>

            <div className="grid grid-cols-3 lg:grid-cols-6 gap-8 mt-10">
                {/* ------------- choose us - 1----------- */}
                <div className="flex flex-col justify-center items-center gap-1 border rounded-xl p-4 text-black hover:bg-[#FF3811] hover:text-white">
                    <img src="/public/images/icons/group.svg" alt="group" className="w-fit" />
                    <h6 className="text-lg font-bold">Expert Team</h6>
                </div>
                {/* ------------- choose us - 2 ----------- */}
                <div className="flex flex-col justify-center items-center gap-1 border rounded-xl p-4 text-black hover:bg-[#FF3811] hover:text-white">
                    <img src="/public/images/icons/clock.png" alt="group" className="w-fit" />
                    <h6 className="text-lg font-bold ">Timely Delivery</h6>
                </div>
                {/* ------------- choose us - 3 ----------- */}
                <div className="flex flex-col justify-center items-center gap-1 border rounded-xl p-4 text-black hover:bg-[#FF3811] hover:text-white">
                    <img src="/public/images/icons/person.svg" className="w-fit" alt="group" />
                    <h6 className="text-lg font-bold ">24/7 Support</h6>
                </div>
                {/* ------------- choose us - 4 ----------- */}
                <div className="flex flex-col justify-center items-center gap-1 border rounded-xl p-4 text-black hover:bg-[#FF3811] hover:text-white">
                    <img src="/public/images/icons/Wrench.svg" className="w-fit" alt="group" />
                    <h6 className="text-lg font-bold ">Expert Team</h6>
                </div>
                {/* ------------- choose us - 5 ----------- */}
                <div className="flex flex-col justify-center items-center gap-1 border rounded-xl p-4 text-black hover:bg-[#FF3811] hover:text-white">
                    <img src="/public/images/icons/check.svg" className="w-fit" alt="group" />
                    <h6 className="text-lg font-bold ">100% Guranty</h6>
                </div>
                {/* ------------- choose us - 6 ----------- */}
                <div className="flex flex-col justify-center items-center gap-1 border rounded-xl p-4 text-black hover:bg-[#FF3811] hover:text-white">
                    <img src="/public/images/icons/deliveryt.svg" className="w-fit" alt="group" />
                    <h6 className="text-lg font-bold ">Timely Delivery</h6>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;