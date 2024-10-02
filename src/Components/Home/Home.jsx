import { useState } from "react";
import Categories from "../categories/Categories";
import Header from "../Header/Header";
import './Home.css'
import { Helmet } from "react-helmet-async";

const Home = () => {

    const [searchTerm, setSearchTerm] = useState(""); 
    const [inputValue, setInputValue] = useState(""); // getting input value here
    
    const handleSearchTerm = () => {
        setSearchTerm(inputValue); // setting search term here
        setInputValue(""); // Clear input field after setting search term
    }

    return (
        <div>
            <Helmet>
                <title>Donation Campaign | Home</title>
            </Helmet>
            <div className="fontInter homeImg pb-60 mb-[100px]">
                <div className="mb-28">
                    <Header></Header>
                </div>

                <div className="text-center mb-10">
                    <h1 className="text-5xl font-bold text-black">We Grow By Helping People In Need</h1>
                </div>
                <div className="flex items-center justify-center">
                    <input type="text" placeholder="Search here...."
                        value={inputValue} // default value for input placeholder 
                        onChange={(e) => setInputValue(e.target.value)}
                        className="rounded-l-lg border-2 border-gray-400 focus:outline-none focus:border-gray-500 px-4 py-2 w-1/4 text-gray-700"
                    />
                    <button onClick={handleSearchTerm} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-r-lg border-2 border-red-500 hover:border-red-600">Search</button>
                </div>
            </div>

            <Categories searchTerm={searchTerm}></Categories> {/* for example: searchTerm = "food" */}
        </div>
    );
};

export default Home;

// e.target.value: This gets the current value (text) inside the input field where the change occurred.