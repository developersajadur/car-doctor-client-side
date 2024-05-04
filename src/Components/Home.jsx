import AboutHomePage from "./Home/AboutHomePage";
import Address from "./Home/Address";
import Banner from "./Home/Banner";
import ChooseUs from "./Home/ChooseUs";
import Review from "./Home/Review";
import ServicesHome from "./Home/ServicesHome";
import Team from "./Home/Team";


const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <AboutHomePage></AboutHomePage>
            <ServicesHome></ServicesHome>
            <Address></Address>
            <Team></Team>
            <ChooseUs></ChooseUs>
            <Review></Review>
        </div>
    );
};

export default Home;