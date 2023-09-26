import PropTypes from 'prop-types';

const DonatedCard = ({ card }) => {
    const { picture, title, price, category, category_bg_color, card_bg_color, text_button_bg_color } = card;
    const titleStyle = {
        color: category_bg_color,
    };

    const textButtonBgColor = {
        backgroundColor: text_button_bg_color,

    };
    const cardBgColor = {
        backgroundColor: card_bg_color,
    };
    const viewButton = {
        backgroundColor: category_bg_color,
    }
    
    return (
        <div className='md:pb-5 pb-3' >
            <div className='flex gap-6 lg:w-[600px] md:w-[600px]  md:ml-16 lg:h-[200px] w-[400px] h-[250px] rounded-lg' style={cardBgColor}>
                <div><img className='lg:h-[200px] h-[250px] md:w-[220px] w-[180px] rounded-md lg:w-[220px]' src={picture} alt="" /></div>
                <div className='py-[50px]' >
                    <div>
                        <button className='px-[10px] py-[4px] rounded-md' style={textButtonBgColor}><span style={titleStyle}>{category}</span></button>
                    </div>
                    <div className='lg:text-[24px] text-black font-semibold'>
                        {title}
                    </div>
                    <div style={titleStyle}>${price}</div>
                    <div ><button className='px-[10px] py-[4px] rounded-md' style={viewButton}  ><span className='text-white'>View Details</span></button></div>
                </div>
            </div>
            
        </div>
        
    );
};
DonatedCard.propTypes = {
    card: PropTypes.object,
};

export default DonatedCard;