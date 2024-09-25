import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Header/Header";
import '../Category/Category.css'

const BranchDetails = () => {

    const branches = useLoaderData();
    const {id} = useParams(); // in string form

    const branch = branches.find(branch => branch.id === parseInt(id))

    console.log(branch);

    const {picture, price, title, description} = branch;

    return (
        <div className="max-w-7xl mx-auto fontInter mb-32">
            <div className="mb-28">
                <Header />
            </div>

            <div className="relative">
                <img className="rounded-lg w-full" src={picture} alt={title} />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 h-1/6 flex justify-start items-center rounded-b-lg">
                    <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-4 rounded-md text-xl ml-8 userContainer">Donate ${price}</button>
                </div>
            </div>
            <h2 className="font-bold text-[2.50rem] mt-14">{title}</h2>
            <p className="mt-6 text-[1rem] leading-7">{description}</p>
        </div>
    );
};

export default BranchDetails;