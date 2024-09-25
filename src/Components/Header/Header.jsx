import { NavLink } from 'react-router-dom';
import tree from '../../assets/Resources/christmas-tree.png'


const Header = () => {

    return (
        <div className='flex items-center justify-between pt-10 fontInter max-w-7xl mx-auto'>
            <div className="flex items-center gap-8">
                <img className='w-16' src={tree} alt="" />
                <div>
                    <h2 className="text-4xl font-bold text-[#FF444A] my-0">Donation</h2>
                    <p className="tracking-widest text-lg mb-0">Campaign</p>
                </div>
            </div>

            <div className='flex items-center gap-12'>
                <NavLink className={({isActive}) =>
                    isActive ? "nav-active" : "nav-inactive"} to="/">Home</NavLink>
                <NavLink className={({isActive}) =>
                    isActive ? "nav-active" : "nav-inactive"} to="/donation">Donation</NavLink>
                <NavLink className={({isActive}) =>
                    isActive ? "nav-active" : "nav-inactive"} to="/statistics">Statistics</NavLink>
            </div>
        </div>
    );
};

export default Header;