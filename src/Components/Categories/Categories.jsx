import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import Category from "../Category/Category";

const Categories = ({searchTerm}) => {

    const [categories, addCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        fetch('campaign.json')
        .then(response => response.json())
        .then(data => {
            addCategories(data);
            setLoading(false); // stop loader after data is fetched
        });
    }, []);

    if (loading) {
        return <div className="flex flex-col items-center justify-center min-h-screen mx-auto w-auto">Loading...</div>;
    }

    // filtered categories based on search value:
    const filteredCategories = categories.filter(branch => branch.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="max-w-7xl mx-auto mb-48">
            <div className="grid grid-cols-4 gap-6">
                {filteredCategories.length > 0 ? (
                    filteredCategories.map((branch, idx) => 
                        <Category key={idx} branch={branch} />
                    )
                ) : (
                    categories.map((branch, idx) => 
                        <Category key={idx} branch={branch} />
                    )
                )}
            </div>
        </div>
    );
};

Categories.propTypes = {
    searchTerm: PropTypes.string
};

export default Categories;

/* The hook depends on filteredCategories and searchTerm. This means it will run whenever either of these values changes. */