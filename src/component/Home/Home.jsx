import Cards from "../Cards/Cards";
import Hero from "../Hero/Hero";


const Home = () => {
    return (
        <div className="bg-white">
            <Hero></Hero>
            <div className="px-[140px] pt-[100px] pb-[180px] ">
            <Cards></Cards>
            </div>
            
        </div>
    );
};

export default Home;