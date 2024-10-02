import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Header/Header";
import '../Category/Category.css'
import { saveNewDonation } from "../../Utility/localStorage";
import Swal from 'sweetalert2';
import { Helmet } from "react-helmet-async";

const BranchDetails = () => {

    const branches = useLoaderData();
    const {id} = useParams(); // in string form

    const branch = branches.find(branch => branch.id === parseInt(id))

    console.log(branch);

    const {picture, price, title, description} = branch;

    const handleDonation = () => {
        saveNewDonation(id);

        Swal.fire({
            title: 'Thank You!',
            text: 'Your donation has been successfully processed.',
            icon: 'success',
            confirmButtonText: 'OK',
            confirmButtonColor: '#ff7e67',
            background: '#fefefe',
            customClass: {
                popup: 'rounded-lg shadow-md'
            },
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        });
    }

    return (
        <div className="max-w-7xl mx-auto fontInter mb-32">
            <Helmet>
                <title>Donation Campaign | Branch Details</title>
            </Helmet>
            
            <div className="mb-28">
                <Header/>
            </div>

            <div className="relative">
                <img className="rounded-lg w-full" src={picture} alt={title} />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 h-1/6 flex justify-start items-center rounded-b-lg">
                    <button onClick={handleDonation} className="bg-red-500 hover:bg-red-600 text-white px-6 py-4 rounded-md text-xl ml-8 userContainer">Donate ${price}</button>
                </div>
            </div>
            <h2 className="font-bold text-[2.50rem] mt-14">{title}</h2>
            <p className="mt-6 text-[1rem] leading-7">{description}</p>
        </div>
    );
};

export default BranchDetails;