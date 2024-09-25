import Categories from "../categories/Categories";
import Header from "../Header/Header";
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className="fontInter homeImg pb-60 mb-[100px]">
                <div className="mb-28">
                    <Header></Header>
                </div>

                <div className="text-center mb-10">
                    <h1 className="text-5xl font-bold text-black">We Grow By Helping People In Need</h1>
                </div>
                <div className="flex items-center justify-center">
                    <input type="text" placeholder="Search here...."
                        className="rounded-l-lg border-2 border-gray-400 focus:outline-none focus:border-gray-500 px-4 py-2 w-1/4 text-gray-700"
                    />
                    <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-r-lg border-2 border-red-500 hover:border-red-600">Search</button>
                </div>
            </div>

            <Categories></Categories>
        </div>
    );
};

export default Home;