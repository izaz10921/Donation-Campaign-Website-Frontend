
import { useEffect, useState } from "react";
import Card from "../Card/Card";


const Cards = () => {

    const [cardData,setCardData]=useState([]);


    useEffect(() => {
        fetch("data.json")
            .then((res) => res.json())
            .then((data) => setCardData(data));
    }, []);


    return (
        <div className='grid grid-cols-4 gap-6 '>
           

           {
            cardData.map(cardInfo => <Card key={cardInfo.id} cardInfo={cardInfo}></Card>)
           }
    
        </div>
    );
};

export default Cards;