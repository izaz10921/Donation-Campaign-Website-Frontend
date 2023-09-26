import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonationData } from "../../utility/localstorage";
import DonatedCard from "../../DonatedCard/DonatedCard";

 

const Donation = () => {
  const cards = useLoaderData();
  const [dataLength, setDataLength] = useState(4);
  const [cardDonate, setCardDonate] = useState([]);
  

  useEffect(() => {
    const storedCardIds = getStoredDonationData();
    if (cards.length > 0) {
      const donatedCard = cards.filter((card) =>
        storedCardIds.includes(card.id)
      );

      setCardDonate(donatedCard);

      
      
    }
  }, [cards]);

  return (
    <div className="bg-white pb-[240px] ">
      <div className="pt-[83px] lg:grid lg:grid-cols-2 lg:gap-6 lg:px-[80px]">
        {cardDonate.slice(0, dataLength).map((card) => (
          <DonatedCard key={card.id} card={card}></DonatedCard>
        ))}
      </div>
      <div className={dataLength === cardDonate.length ? "hidden" : ""}>
        <div className="lg:px-[700px] md:px-[320px] px-[180px] pt-10 ">
          <button
            onClick={() => setDataLength(cardDonate.length)}
            className="lg:px-[28px] md:px-[15px] px-[8px]  py-[10px] rounded-md bg-green-600 text-white"
          >
            See All
          </button>
        </div>
      </div>
      <div>
        
      </div>
     

    </div>
  );
};

export default Donation;
