
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
        <div className=' lg:grid lg:grid-cols-4 lg:gap-6 md:grid md:grid-cols-2 grid grid-rows-1 gap-4'>
           

           {
            cardData.map(cardInfo => <Card key={cardInfo.id} cardInfo={cardInfo}></Card>)
           }8
    
        </div>
    );
};

export default Cards;