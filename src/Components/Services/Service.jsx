

const Service = ({service}) => {
    return (
        <div>
            <div className="card w-96 border h-96">
  <figure className="px-10 pt-10">
    <img src={service.img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-start text-center">
    <h2 className="card-title text-2xl font-bold">{service.title}</h2>
    <p className="text-lg font-bold text-[#FF3811]">Price : $20.00</p>
  </div>
</div>
        </div>
    );
};

export default Service;