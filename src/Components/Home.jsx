import AboutHomePage from "./Home/AboutHomePage";
import Address from "./Home/Address";
import ChooseUs from "./Home/ChooseUs";
import Review from "./Home/Review";
import Slider from "./Home/Slider";
import Team from "./Home/Team";


const Home = () => {
    return (
        <div >
            <Slider></Slider>
            <AboutHomePage></AboutHomePage>
            <Address></Address>
            <Team></Team>
            <ChooseUs></ChooseUs>
            <Review></Review>
        </div>
    );
};

export default Home;