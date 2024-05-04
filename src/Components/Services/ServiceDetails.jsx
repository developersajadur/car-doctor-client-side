import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
    const service = useLoaderData()

    return (
        <div>
            <h1>{service?.title}</h1>
        </div>
    );
};

export default ServiceDetails;