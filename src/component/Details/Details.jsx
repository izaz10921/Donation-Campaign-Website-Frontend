import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { saveDonationData } from "../../utility/localstorage";


const Details = () => {
    const details = useLoaderData();  
    const {cardId} = useParams();
    const idInt = parseInt(cardId);
    const detail = details.find(detail => detail.id === idInt );
    
    const {category_bg_color} = detail;
    const titleStyle = {
        backgroundColor: category_bg_color, 
      };

      const handleAddedDonation = () => {
        saveDonationData(idInt);
        toast.success('Donation added.');
      }
    return (
        <div className="bg-white">
            <img className="lg:w-[1320px] lg:h-[700px] md:w-[600px] md:h-[500px] w-[400px] h-[400px] mx-auto pt-[85px] rounded-md relative" src={detail.picture} alt="" />
            <div className="bg-black w-[400px] md:w-[600px] h-[100px] lg:w-[1320px] lg:h-[130px] mx-auto relative lg:mt-[-130px] mt-[-100px] opacity-60"></div>
            <div className="relative mt-[-90px]"><button onClick={() => handleAddedDonation()} style={titleStyle} className="lg:ml-[177px] md:ml-[110px] ml-[40px] px-[26px] py-4 mt-3 text-white text-[20px]   rounded-md font-semibold">Donate $ {detail.price}</button></div>
            <h1 className="pt-[56px] lg:pl-[110px] md:pl-[80px] pl-[10px] pb-6 lg:text-[40px] text-[30px] font-bold text-black">{detail.title}</h1>
            <p className="lg:pl-[110px] md:pl-[80px] pl-[10px] pb-[122px] text-black text-[16px] font-normal">{detail.description}</p>

            <ToastContainer />

        </div>
    );
};

export default Details;