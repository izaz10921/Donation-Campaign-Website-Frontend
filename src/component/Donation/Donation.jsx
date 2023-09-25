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
            const donatedCard = cards.filter(card => storedCardIds.includes(card.id))

            setCardDonate(donatedCard);


        }
    }, [])
    return (
        <div className="bg-white pb-[240px] ">
            <div className=' pt-[83px] grid grid-cols-2 gap-6 px-[140px]'>
                {
                    cardDonate.slice(0, dataLength).map(card => <DonatedCard key={card.id} card={card}></DonatedCard>)
                }

            </div>
            <div className={dataLength === cardDonate.length ? 'hidden' :''}>
                <div className="px-[700px] pt-10 " ><button onClick={() => setDataLength(cardDonate.length)} className='px-[28px] py-[10px] rounded-md bg-green-600 text-white ' >See All</button></div>
            </div>
        </div>
    );
};

export default Donation;