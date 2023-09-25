import { useLoaderData, useParams } from "react-router-dom";


const Details = () => {
    const details = useLoaderData();  
    const {cardId} = useParams();
    const idInt = parseInt(cardId);
    const detail = details.find(detail => detail.id === idInt );
    
    const {category_bg_color} = detail;
    const titleStyle = {
        backgroundColor: category_bg_color, 
      };
    return (
        <div className="bg-white">
            <img className="w-[1320px] h-[700px] mx-auto pt-[85px] rounded-md relative" src={detail.picture} alt="" />
            <div className="bg-black w-[1320px] h-[130px] mx-auto relative mt-[-130px] opacity-60"></div>
            <div className="relative mt-[-90px]"><button style={titleStyle} className="ml-[177px] px-[26px] py-4 text-white text-[20px]   rounded-md font-semibold">Donate $ {detail.price}</button></div>
            <h1 className="pt-[56px] pl-[110px] pb-6 text-[40px] font-bold text-black">{detail.title}</h1>
            <p className="pl-[110px] pb-[122px] text-black text-[16px] font-normal">{detail.description}</p>

        </div>
    );
};

export default Details;