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
        <div >
            <div className='flex gap-6 w-[600px] h-[200px] rounded-lg' style={cardBgColor}>
                <div><img className='h-[200px] rounded-md w-[220px]' src={picture} alt="" /></div>
                <div className='py-[50px]' >
                    <div>
                        <button className='px-[10px] py-[4px] rounded-md' style={textButtonBgColor}><span style={titleStyle}>{category}</span></button>
                    </div>
                    <div className='text-[24px] text-black font-semibold'>
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