import { NavLink } from "react-router-dom";


const Navbar = () => {

   
    return (
        <div className=" lg:flex md:flex lg:justify-between md:justify-between items-center text-black bg-white px-[140px] pt-14 ">
            <div className="pb-[10px]"><img src="https://i.ibb.co/nj7tjJj/Logo.png" alt="" /></div>


            <div className="flex gap-4">
                <div><NavLink exact to="/" style={({ isActive }) => {
                        return {
                            fontWeight: isActive ? "bold" : "",
                            color: isActive ? "red" : "black",
                            textDecoration: isActive ? "underline" : "",
                        };
                    }} >Home</NavLink></div>
                <div><NavLink
                    to="/donation"
                    style={({ isActive}) => {
                        return {
                            fontWeight: isActive ? "bold" : "",
                            color: isActive ? "red" : "black",
                            textDecoration: isActive ? "underline" : "",
                        };
                    }}
                >
                    Donation
                </NavLink></div>
                <div><NavLink to="/statistics" style={({ isActive }) => {
                        return {
                            fontWeight: isActive ? "bold" : "",
                            color: isActive ? "red" : "black",
                            textDecoration: isActive ? "underline" : "",
                           
                            
                        };
                    }}>Statistics</NavLink></div>
            </div>


        </div>
    );
};

export default Navbar;