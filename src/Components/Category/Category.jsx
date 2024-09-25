import PropTypes from 'prop-types'; 
import './Category.css'

const Category = ({branch}) => {

    const {picture, title, category, category_bg, text_btn_bg, text_color} = branch;

    return (
        <div className='rounded-lg fontInter userContainer' style={{ backgroundColor: category_bg }}>
            <img className='w-80 rounded-t-lg' src={picture} alt="" />
            <div className='p-5'>
                <button className='text-sm px-1.5 py-1 rounded-md mb-1.5' style={{ backgroundColor: text_btn_bg, color: text_color }}>
                    {category}
                </button>
                <h3 className='font-semibold' style={{color: text_color}}>{title}</h3>
            </div>
        </div>
    );
};

Category.propTypes = {
    branch: PropTypes.shape({
        picture: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        category_bg: PropTypes.string,
        card_bg: PropTypes.string,
        text_btn_bg: PropTypes.string,
        text_color: PropTypes.string,
    }).isRequired
}

export default Category;