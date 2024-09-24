import { Link } from "react-router-dom";
import Header from "../Header/Header";

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Link to="/error">okay</Link>
        </div>
    );
};

export default Root;