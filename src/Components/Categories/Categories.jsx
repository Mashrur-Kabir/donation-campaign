import { useEffect, useState } from "react";
import Category from "../Category/Category";

const Categories = () => {

    const [categories, addCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(()=> {
        fetch('campaign.json')
        .then(response => response.json())
        .then(data => addCategories(data))
        setLoading(false);
    }, []);

    if (loading) {
        return <div className="flex flex-col items-center justify-center min-h-screen mx-auto w-auto">Loading...</div>;
    }

    return (
        <div className="grid grid-cols-4 gap-6 max-w-7xl mx-auto mb-48">
            {
                categories.map((branch, idx) => <Category key={idx} branch={branch}></Category> )
            }
        </div>
    );
};

export default Categories;
