import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import DonatedDisplay from "../DonatedDisplay/DonatedDisplay";
import { getPreviousDonations } from "../../Utility/localStorage";
import { useState } from "react";
import { AiOutlineInbox } from 'react-icons/ai'; // Using an icon library for an empty state
import { Helmet } from "react-helmet-async";

const Donated = () => {
  const prevData = getPreviousDonations();  // Fetch donations from localStorage (example response = ['6', '12']; array of strings)
  const branches = useLoaderData();
  const [dataLength, setDataLength] = useState(4); 

  console.log(prevData);

  // Filter the branches that match any of the donated IDs
  const donatedBranches = branches.filter(branch => 
    prevData.includes(branch.id.toString())  // since prevData has strings as well
  );

  return (
    <div className="max-w-7xl mx-auto relative">
        <Helmet>
            <title>Donation Campaign | Donated</title>
        </Helmet>

        <div className="mb-28">
            <Header />
        </div>
        <div className="grid grid-cols-2 gap-6">
            {
            donatedBranches.length > 0 ? (
                donatedBranches.slice(0, dataLength).map((branch, idx) => (
                <DonatedDisplay key={idx} branch={branch} />
                ))
            ) : (
                <div className="flex flex-col items-center text-center absolute top-64 left-0 right-0">
                    <AiOutlineInbox className="text-7xl text-emerald-500 mb-4 animate-bounce" />
                    <p className="text-lg text-gray-500 font-semibold">No donations found</p>
                    <p className="text-sm text-gray-400">Looks like you haven’t made any donations yet.</p>
                </div>
            )
            }
        </div>

        {/* Show All Button */}
        {dataLength < donatedBranches.length && ( // example: dl= 4, db= 6 ? will show whats below
            <div className="flex justify-center items-center my-12">
                <button onClick={() => setDataLength(donatedBranches.length)} // sdl = 6, and then dl will also be 6; dl = 6, db = 6 ? will hide btn below
                    className="px-4 py-2 rounded-md font-semibold text-white bg-gradient-to-r from-sky-500 to-indigo-500 hover:brightness-75 hover:shadow-lg transition-all duration-200 ease-in-out">
                    Show All
                </button>
            </div>
        )}

        {/* Show Less Button */}
        {dataLength > 4 && ( // example: dl = 5/6/7... 
            <div className="flex justify-center items-center my-12">
                <button onClick={() => setDataLength(4)} // dl = 4; which will violate the condition. 
                    className="px-4 py-2 rounded-md font-semibold text-white bg-gradient-to-r from-sky-500 to-indigo-500 hover:brightness-75 hover:shadow-lg transition-all duration-200 ease-in-out">
                    Show Less
                </button>
            </div>
        )}
    </div>
  );
};

export default Donated;

// donatedBranches is the filtered array of branch objects that match the IDs from prevData
