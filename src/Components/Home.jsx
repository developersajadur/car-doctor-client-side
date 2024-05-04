import AboutHomePage from "./Home/AboutHomePage";
import Address from "./Home/Address";
import ChooseUs from "./Home/ChooseUs";
import Slider from "./Home/Slider";


const Home = () => {
    return (
        <div >
            <Slider></Slider>
            <AboutHomePage></AboutHomePage>
            <Address></Address>
            <ChooseUs></ChooseUs>
        </div>
    );
};

export default Home;