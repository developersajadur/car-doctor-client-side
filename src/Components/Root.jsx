import { Outlet } from "react-router-dom";
import Header from "./Home/Header";
import Footer from "./Home/Footer";


const Root = () => {
    return (
        <div>
            <div className="container mx-auto">
            <Header></Header>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;