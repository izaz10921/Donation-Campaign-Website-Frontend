import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Card = ({ cardInfo }) => {
  const { picture, title, category, category_bg_color, card_bg_color, text_button_bg_color } = cardInfo;

  
  const titleStyle = {
    color: category_bg_color, 
  };
  
  const textButtonBgColor ={
    backgroundColor: text_button_bg_color,

  };
  const cardBgColor ={
    backgroundColor: card_bg_color,
  };

  return (
   
      <Link to={`/card/${cardInfo.id}`}><div style={cardBgColor} className='rounded-md' >
      <img src={picture} alt="" />
     <div className='pl-4 pb-4 pt-4'>
     <div><button className='px-[10px] py-[4px] rounded-md' style={textButtonBgColor}><span style={titleStyle}>{category}</span></button></div>
      <div className='text-5 font-semibold'><span style={titleStyle}>{title}</span></div>
     </div>
    </div></Link>
   
  );
};

Card.propTypes = {
  cardInfo: PropTypes.object,
};

export default Card;
