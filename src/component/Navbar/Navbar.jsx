import { NavLink } from "react-router-dom";


const Navbar = () => {

   
    return (
        <div className=" flex justify-between items-center text-black bg-white px-[140px] pt-14 ">
            <div><img src="/Resources/Logo.png" alt="" /></div>


            <div className="flex gap-4">
                <div><NavLink exact to="/home" style={({ isActive }) => {
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