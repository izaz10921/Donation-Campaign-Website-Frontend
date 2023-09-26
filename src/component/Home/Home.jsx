import Cards from "../Cards/Cards";
import Hero from "../Hero/Hero";


const Home = () => {
    return (
        <div className="bg-white">
            <Hero></Hero>
            <div className="lg:px-[140px] px-[80px] pt-[100px] pb-[180px] ">
            <Cards></Cards>
            </div>
            
        </div>
    );
};

export default Home;