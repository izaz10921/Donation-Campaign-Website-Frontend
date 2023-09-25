

const Hero = () => {
    return (
        <div className="">
            <div className="bg-white w-full h-[600px] bg-[url('https://i.ibb.co/8gJLY60/Clothing.png')] bg-no-repeat bg-cover relative">
            <div className="bg-white w-full h-[600px] mx-auto relative  opacity-90"></div>

                <div className=" py-[220px] relative mt-[-600px]">
                    <h2 className="  text-black font-bold text-[38px] text-center ">
                        I Grow By Helping People In Need
                    </h2>
                    <form className="pt-6 px-[530px] flex" >
                        <input type="text" name="" id="" placeholder="Search here...." className="bg-white text-black border-[2px] border-slate-300 w-[360px] h-[54px] rounded-s-lg pl-5" />
                        <input type="submit" value="Search" className="bg-red-500 font-medium rounded-e-lg px-[27px] py-4 text-white" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Hero;
