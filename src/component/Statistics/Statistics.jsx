
import { useLoaderData } from 'react-router-dom';
import { useEffect, useState } from "react";
import { getStoredDonationData } from "../../utility/localstorage";
import 'chart.js/auto';

import { Pie } from 'react-chartjs-2';
const Statistics = () => {
    const cardAll = useLoaderData();
    const [totalDonationPrice, setTotalDonationPrice] = useState(0); 
   


    useEffect(() => {
        const storedCardIds = getStoredDonationData();
        if (cardAll.length > 0) {
          const donatedCard = cardAll.filter((card) =>
            storedCardIds.includes(card.id)
          );
    
         
    
          
          const sum = donatedCard.reduce(
            (accumulator, currentCard) => accumulator + currentCard.price,
            0
          );
    
          setTotalDonationPrice(sum); 
        }
      }, [cardAll]);

    
    const totalCardAllPrice = cardAll.reduce((accumulator, currentCard) => accumulator + currentCard.price, 0);

   let your = totalDonationPrice / totalCardAllPrice ;
   console.log(your);
   let yourDonation = your*100;
   console.log(yourDonation);
   let totalDonation = 100 - yourDonation ;
   console.log(totalDonation);



   const data = {
    labels: ['Total Donation', 'Your Donation'],
    datasets: [
      {
        data: [totalDonation,yourDonation],
        backgroundColor: ['#FF6384', '#36A2EB'], 
      },
    ],
  };   
    return (
        <div className='bg-white  '>
            
              <div className='lg:px-[500px] md:px-[220px] px-[70px] pb-[300px] pt-[100px]'>
              
                <div className='lg:w-[500px] w-[300px] lg:h-[500px] h-[300px] '><Pie data={data} /></div>
              </div>
        </div>
    );
};

export default Statistics;
