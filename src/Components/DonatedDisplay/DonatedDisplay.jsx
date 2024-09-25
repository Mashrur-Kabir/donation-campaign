import PropTypes from 'prop-types'; 
import { NavLink } from "react-router-dom";

const DonatedDisplay = ({ branch }) => {
  const { picture, title, category, category_bg, text_btn_bg, text_color, price } = branch;

  

  return (
    <div className="flex items-stretch rounded-lg shadow-lg gap-6" style={{ backgroundColor: category_bg }}>
        <div className="w-2/5">
            <img className="rounded-l-lg object-cover w-full h-full" src={picture} alt={title} />
        </div>
        <div className="py-6 flex flex-col justify-between">
            <div>
                <button className="text-xs px-2 py-1 rounded mb-2"style={{ backgroundColor: text_btn_bg, color: text_color }}>
                    {category}
                </button>
                <h3 className="font-semibold text-xl mb-1">{title}</h3>
                <p className="text-lg font-semibold mb-4" style={{color: text_color}}>${price}</p>
            </div>
            <NavLink
                to={`/category/${branch.id}`}
                className="w-auto max-w-max px-4 py-2.5 text-white rounded-md"
                style={{ backgroundColor: text_color }}>
                View Details
            </NavLink>
        </div>
    </div>
  );
};

DonatedDisplay.propTypes = {
    branch: PropTypes.shape({
      id: PropTypes.number.isRequired,
      picture: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      category_bg: PropTypes.string.isRequired,
      text_btn_bg: PropTypes.string.isRequired,
      text_color: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }).isRequired,
}

export default DonatedDisplay;

// flex items-stretch to ensure the image and the content have equal height.
